// pages/login.js
"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllApprovedJokes, getUniqueTypes, submitJoke } from '../Services/JokesService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [jokes, setJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [types, setTypes] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [newJoke, setNewJoke] = useState("");
  const [newJokeType, setNewJokeType] = useState("");
  const [newType, setNewType] = useState(""); // Separate state for new type input
  const [addingJoke, setAddingJoke] = useState(false);

  useEffect(() => {
    AOS.init();
    fetchJokes();
    fetchTypes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await getAllApprovedJokes();
      setJokes(response.data);
      setFilteredJokes(response.data);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await getUniqueTypes();
      setTypes(["all", ...response.data]);
    } catch (error) {
      console.error("Error fetching types:", error);
    }
  };

  const handleTabClick = (type) => {
    setActiveTab(type);
    if (type === "all") {
      setFilteredJokes(jokes);
    } else {
      const filtered = jokes.filter(joke => joke.type === type);
      setFilteredJokes(filtered);
    }
  };

  const handleAddJoke = async () => {
    if (!newJoke) return;
    setAddingJoke(true);
    try {
      const jokeType = newJokeType === "new" ? newType : newJokeType;
      await submitJoke({ content: newJoke, type: jokeType });
      setNewJoke("");
      setNewJokeType("");
      setNewType("");
      setPopupVisible(false);
      toast.success("Joke added successfully!");
      fetchJokes(); // Reload jokes to include the newly added one
    } catch (error) {
      toast.error("Failed to add joke.");
      console.error("Error adding joke:", error);
    } finally {
      setAddingJoke(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-cover bg-center mt-8 mb-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Jokes</h2>
        <div className="mb-6 flex justify-center space-x-4">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTabClick(type)}
              className={`py-2 px-4 rounded-md ${
                activeTab === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <div className="text-center mb-6">
          <button
            onClick={() => setPopupVisible(true)}
            className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Want to add a new joke?
          </button>
        </div>
        <div className="space-y-4 mb-6">
          {filteredJokes.length > 0  && filteredJokes.map((joke) => (
            <div
              key={joke.id}
              data-aos="fade-up"
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              {joke.content}
            </div>
          ))}
        </div>
      </div>

      {/* Popup for Adding Joke */}
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add a New Joke</h3>
            <textarea
              value={newJoke}
              onChange={(e) => setNewJoke(e.target.value)}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your joke here..."
            />
            <select
              value={newJokeType}
              onChange={(e) => setNewJokeType(e.target.value)}
              className="w-full p-2 mt-4 border border-gray-300 rounded-md"
            >
              <option value="">Select Type</option>
              {types.filter(type => type !== "all").map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
              <option value="new">Add New Type</option>
            </select>
            {newJokeType === "new" && (
              <input
                type="text"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter new joke type..."
              />
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setPopupVisible(false)}
                className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddJoke}
                disabled={addingJoke || !newJoke}
                className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {addingJoke ? "Adding..." : "Add Joke"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
}
