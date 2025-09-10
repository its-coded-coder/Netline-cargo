import express from 'express';
import nodemailer from 'nodemailer';
import { saveQuote } from '../database.js';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const quoteData = req.body;
    
    const quoteId = await saveQuote(quoteData);

    const emailContent = `
New Quote Request #${quoteId}

Customer Information:
Name: ${quoteData.name}
Email: ${quoteData.email}
Phone: ${quoteData.phone}
Company: ${quoteData.company || 'N/A'}

Shipping Details:
Origin: ${quoteData.origin || 'N/A'}
Destination: ${quoteData.destination || 'N/A'}
Service Type: ${quoteData.serviceType}
Cargo Type: ${quoteData.cargoType || 'N/A'}
Weight: ${quoteData.weight || 'N/A'} kg
Dimensions: ${quoteData.dimensions || 'N/A'} cm

Additional Details:
${quoteData.description || 'None provided'}

Submitted at: ${new Date().toLocaleString()}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Quote Request #${quoteId} - ${quoteData.name}`,
      text: emailContent
    });

    res.json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId 
    });

  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process quote request' 
    });
  }
});

export default router;