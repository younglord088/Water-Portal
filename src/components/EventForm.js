'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

export default function EventForm() {
  const [eventData, setEventData] = useState({
    name: '',
    location: '',
    date: '',
    description: '',
    photo: '',
  });

  const router = useRouter(); // Use the useRouter hook

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
      router.push('/'); // Navigate to the home page using router.push
    } else {
      const error = await res.json();
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Event Name"
        value={eventData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={eventData.location}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={eventData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={eventData.photo}
        onChange={handleChange}
      />
      <button type="submit">Submit Event</button>
    </form>
  );
}