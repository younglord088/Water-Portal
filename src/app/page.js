'use client'

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api/events?page=${page}&limit=10`);
        const newEvents = await res.json();
        setEvents(newEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events?.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{event.id}
            <h2>{event.name}</h2>
            </h2>
            <p className="text-gray-700 mb-2">{event.location}</p>
            <p className="text-gray-700 mb-2">{event.date}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            {event.photo && <img src={event.photo} alt={event.name} className="w-full h-auto mb-2" />}
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handlePrevPage}>Previous Page</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleNextPage}>Next Page</button>
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
