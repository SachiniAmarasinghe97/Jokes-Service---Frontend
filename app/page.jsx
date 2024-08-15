// pages/login.js
"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {getAllApprovedJokes} from '../Services/JokesService'
// import { submitJokesAPI } from '../utils/axiosInstance';


// Mock function to get types (e.g., from a database)
const fetchTypes = () => {
  // Simulate fetching types from a database
  return new Promise((resolve) => {
    setTimeout(() => resolve(["all", "funny", "dark"]), 500);
  });
};

// Mock function to get jokes
// const fetchJokes = (start, count, type = 'all') => {
//   const allJokes = Array.from({ length: count }, (_, i) => ({
//     id: start + i,
//     text: `Joke number ${start + i + 1}`,
//     type: i % 2 === 0 ? 'funny' : 'dark', // Example types: 'funny' and 'dark'
//   }));
//   const filteredJokes = type === 'all' ? allJokes : allJokes.filter(joke => joke.type === type);
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(filteredJokes), 500);
//   });
// };



export default function Home() {
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [types, setTypes] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [newJoke, setNewJoke] = useState("");
  const [addingJoke, setAddingJoke] = useState(false);

  useEffect(() => {

    AOS.init();
    fetchJokes();
    loadTypes();
  }, []);

  // useEffect(() => {
  //   loadJokes();
  // }, [activeTab]);

  const fetchJokes = async () => {
    try {
      const response = await getAllApprovedJokes();
      setJokes(response.data);
      console.log(JSON.stringify(response.data))
    } catch (error) {
      console.error("Error fetching jokes:", error);
      return [];
    }
  };

  const loadTypes = async () => {
    // Simulate fetching types from a database
    const fetchedTypes = await fetchTypes();
    setTypes(fetchedTypes);
  };

  const loadJokes = async () => {
    setLoading(true);
    const newJokes = await fetchJokes(page * 5, 5, activeTab);
    setJokes((prevJokes) => [...prevJokes, ...newJokes]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  const handleTabClick = (type) => {
    setActiveTab(type);
    setJokes([]);
    setPage(0);
    loadJokes();
  };

  // const handleAddJoke = async () => {
  //   setAddingJoke(true);
  //   // Simulate adding a joke (e.g., to a database)
  //   setTimeout(() => {
  //     setJokes([{ id: Date.now(), text: newJoke, type: activeTab }, ...jokes]);
  //     setNewJoke('');
  //     setAddingJoke(false);
  //     setPopupVisible(false);
  //   }, 500);
  // };

  const handleAddJoke = async () => {
    setAddingJoke(true);
    try {
      const response = await submitJokesAPI.post("/create", {
        content: newJoke,
        type: activeTab, // Assuming the joke type is based on the active tab
      });

      // Assuming the response contains the new joke
      setJokes([
        { id: response.data._id, content: newJoke, type: activeTab },
        ...jokes,
      ]);
      setNewJoke("");
      setPopupVisible(false);
    } catch (error) {
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
          { jokes.length > 0  && jokes.map((joke) => (
            <div
              key={joke.id}
              data-aos="fade-up"
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              {joke.content}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={loadJokes}
            disabled={loading}
            className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
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
    </div>
  );
}
