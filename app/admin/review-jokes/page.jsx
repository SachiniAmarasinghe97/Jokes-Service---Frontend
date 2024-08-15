"use client";

import { useState, useEffect } from 'react';
import Modal from '../../../components/Modal'; // Adjust the path according to your project structure

// Mock function to get jokes (replace with actual data fetching logic)
const fetchJokes = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { id: 1, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', type: 'funny', isPublic: false },
      { id: 2, text: 'This is a dark joke.', type: 'dark', isPublic: false },
    ]), 500);
  });
};

// Mock function to update joke (replace with actual API call)
const updateJoke = (id, updatedJoke) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(updatedJoke), 500);
  });
};

// Mock function to delete joke (replace with actual API call)
const deleteJoke = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id), 500);
  });
};

// Mock function to make joke public (replace with actual API call)
const makePublicJoke = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id), 500);
  });
};

export default function AdminReview() {
  const [jokes, setJokes] = useState([]);
  const [editingJoke, setEditingJoke] = useState(null);
  const [newText, setNewText] = useState('');
  const [newType, setNewType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedJokeId, setSelectedJokeId] = useState(null);

  useEffect(() => {
    loadJokes();
  }, []);

  const loadJokes = async () => {
    const fetchedJokes = await fetchJokes();
    setJokes(fetchedJokes);
  };

  const handleEditClick = (joke) => {
    setEditingJoke(joke);
    setNewText(joke.text);
    setNewType(joke.type);
  };

  const openModal = (action, jokeId) => {
    setModalAction(action);
    setSelectedJokeId(jokeId);
    setIsModalOpen(true);
  };

  const handleModalConfirm = async () => {
    if (modalAction === 'update' && editingJoke) {
      const updatedJoke = { ...editingJoke, text: newText, type: newType };
      await updateJoke(editingJoke.id, updatedJoke);
      setJokes(jokes.map(joke => joke.id === editingJoke.id ? updatedJoke : joke));
      setEditingJoke(null);
    } else if (modalAction === 'delete') {
      await deleteJoke(selectedJokeId);
      setJokes(jokes.filter(joke => joke.id !== selectedJokeId));
    } else if (modalAction === 'makePublic') {
      await makePublicJoke(selectedJokeId);
      setJokes(jokes.map(joke => joke.id === selectedJokeId ? { ...joke, isPublic: true } : joke));
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
            {editingJoke?.id === joke.id ? (
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
                  onClick={() => setEditingJoke(null)}
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
