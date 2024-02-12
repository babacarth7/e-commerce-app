import Order from '../../../models/Order';
import db from '../../../utils/db';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  try {
    // Fetch the user session
    const session = await getSession({ req });

    // Check if user session exists
    if (!session) {
      return res.status(401).send('Sign-in required');
    }

    // Connect to the database
    await db.connect();

    // Get token from JWT
    const token = await getToken({ req, secret: process.env.SECRET });

    // Validate the user ID format
    if (!token || !token.user || !token.user._id) {
      throw new Error('Invalid user ID format');
    }

    // Create a new order using data from the request body and user ID from the session
    const newOrder = new Order({
      ...req.body,
      user: token.user._id, // Access user ID directly from the token
    });

    // Save the new order to the database
    const order = await newOrder.save();

    // Respond with the created order
    res.status(201).json(order);
  } catch (error) {
    // Handle any errors
    console.error('Error creating order:', error);
    res.status(500).send('Error creating order');
  } finally {
    // Disconnect from the database
    await db.disconnect();
  }
};

export default handler;
