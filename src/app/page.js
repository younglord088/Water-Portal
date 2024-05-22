'use client'
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3000/api/events?page=1&limit=10');
        const newEvents = await res.json();
        setEvents(newEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events?.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <p>{event.description}</p>
            {event.photo && <img src={event.photo} alt={event.name} />}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
