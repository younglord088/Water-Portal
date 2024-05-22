'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventForm() {
  const [eventData, setEventData] = useState({
    name: '',
    location: '',
    date: '',
    description: '',
    photo: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (res.ok) {
      router.push('/');
    } else {
      const error = await res.json();
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <input
        type="text"
        name="name"
        placeholder="Event Name"
        value={eventData.name}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={eventData.location}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={eventData.description}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={eventData.photo}
        onChange={handleChange}
        className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Submit Event
      </button>
    </form>
  );
}
