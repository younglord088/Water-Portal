import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

// Configure API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // optional
    },
  },
};

// Define the POST function
export async function POST(request) {
  if (request.method === 'POST') {
    try {
      // Parse the JSON body
      const body = await request.json();
      const { name, location, date, description, photo } = body;
      console.log('req.body', name, location, date, description, photo);

      // Check for missing fields
      if (!name || !location || !date || !description) {
        return NextResponse.json({ error: 'Missing required fields' });
      }

      let connection;
      try {
        // Create a connection to the database
        const connectionConfig = {
          host: 'localhost',
          user: 'root',    // Use the MySQL username
          password: 'yash@123', // Use the MySQL password
          database: 'power_portal'    // Use the name of your database
        };
        connection = await mysql.createConnection(connectionConfig);

        // Insert the new event into the database
        const [result] = await connection.execute(
          'INSERT INTO events (name, location, date, description, photo) VALUES (?, ?, ?, ?, ?)',
          [name, location, date, description, photo]
        );

        // Create a response object with the new event data
        const newEvent = {
          id: result.insertId,
          name,
          location,
          date,
          description,
          photo,
        };

        // Return the new event as JSON
        return NextResponse.json(newEvent);
      } catch (error) {
        // Handle database errors
        console.error('Failed to create event:', error);
        return NextResponse.json({ error: 'Failed to create event' });
      } finally {
        // Close the database connection
        if (connection) {
          await connection.end();
        }
      }
    } catch (error) {
      // Handle JSON parsing errors
      console.error('Failed to parse JSON body:', error);
      return NextResponse.json({ error: 'Invalid JSON body' });
    }
  } else {
    // Handle non-POST requests
    return NextResponse.json({ error: `Method ${request.method} Not Allowed` });
  }
}
