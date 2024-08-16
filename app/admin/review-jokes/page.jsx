"use client";

import { useState, useEffect } from 'react';
import Modal from '../../../components/Modal'; 
import { 
  getAllNewJokesForAdmin, 
  acceptJoke, 
  editJoke, 
  deleteJoke 
} from '@/Services/JokesService';

export default function AdminReview() {
  const [jokes, setJokes] = useState([]);
  const [editingJokeId, setEditingJokeId] = useState(null);
  const [newText, setNewText] = useState('');
  const [newType, setNewType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedJokeId, setSelectedJokeId] = useState(null);

  useEffect(() => {
    loadJokes();
  }, []);

  const loadJokes = async () => {
    try {
      const response = await getAllNewJokesForAdmin();
      console.log(response.data);
      setJokes(response.data);
    } catch (error) {
      console.error("Error loading jokes:", error);
    }
  };

  const handleEditClick = (joke) => {
    setEditingJokeId(joke.id);
    setNewText(joke.text);
    setNewType(joke.type);
  };

  const openModal = (action, jokeId) => {
    setModalAction(action);
    setSelectedJokeId(jokeId);
    setIsModalOpen(true);
  };

  const handleModalConfirm = async () => {
    if (modalAction === 'update' && editingJokeId) {
      try {
        const updatedJoke = { ...jokes.find(joke => joke.id === editingJokeId), text: newText, type: newType };
        await editJoke(editingJokeId, updatedJoke);
        setJokes(jokes.map(joke => joke.id === editingJokeId ? updatedJoke : joke));
        setEditingJokeId(null);
      } catch (error) {
        console.error("Error updating joke:", error);
      }
    } else if (modalAction === 'delete') {
      try {
        await deleteJoke(selectedJokeId);
        setJokes(jokes.filter(joke => joke.id !== selectedJokeId));
      } catch (error) {
        console.error("Error deleting joke:", error);
      }
    } else if (modalAction === 'makePublic') {
      try {
        await acceptJoke({ id: selectedJokeId });
        setJokes(jokes.map(joke => joke.id === selectedJokeId ? { ...joke, isPublic: true } : joke));
      } catch (error) {
        console.error("Error making joke public:", error);
      }
    }
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-cover bg-center mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Admin Review</h2>
      <div className="space-y-4">
        {jokes.map((joke) => (
          <div key={joke.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
            {editingJokeId === joke.id ? (
              <div>
                <textarea
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                >
                  <option value="funny">Funny</option>
                  <option value="dark">Dark</option>
                </select>
                <button
                  onClick={() => openModal('update')}
                  className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditingJokeId(null)}
                  className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p className="mb-2">{joke.text}</p>
                <p className="mb-4 text-sm text-gray-600">Type: {joke.type}</p>
                <p className={`mb-4 text-sm ${joke.isPublic ? 'text-green-600' : 'text-red-600'}`}>
                  {joke.isPublic ? 'Public' : 'Private'}
                </p>
                <button
                  onClick={() => handleEditClick(joke)}
                  className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => openModal('delete', joke.id)}
                  className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mr-2"
                >
                  Delete
                </button>
                {!joke.isPublic && (
                  <button
                    onClick={() => openModal('makePublic', joke.id)}
                    className="py-2 px-4 bg-yellow-600 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Make Public
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        message={
          modalAction === 'update'
            ? 'Are you sure you want to update this joke?'
            : modalAction === 'delete'
            ? 'Are you sure you want to delete this joke?'
            : 'Are you sure you want to make this joke public?'
        }
        confirmText={
          modalAction === 'update'
            ? 'Update'
            : modalAction === 'delete'
            ? 'Delete'
            : 'Make Public'
        }
        cancelText="Cancel"
      />
    </div>
  );
}
