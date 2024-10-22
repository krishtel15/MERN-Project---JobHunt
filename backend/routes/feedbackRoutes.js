import express from 'express';
import { addFeedback, getFeedbacks } from '../controllers/feedbackController.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';// Use existing authentication middleware

const router = express.Router();

router.route('/')
  .post(isAuthenticated, addFeedback) // Use isAuthenticated instead of protect
  .get(getFeedbacks);

export default router;

