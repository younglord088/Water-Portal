// src/app/api/events/route.js
import db from '../../../lib/db';

export async function POST(request) {
  try {
    const { name, location, date, description, photo } = await request.json();

    if (!name || !location || !date || !description) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const [result] = await db.query(
      'INSERT INTO events (name, location, date, description, photo) VALUES (?, ?, ?, ?, ?)',
      [name, location, date, description, photo]
    );

    return new Response(JSON.stringify({ message: 'Event created', eventId: result.insertId }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
