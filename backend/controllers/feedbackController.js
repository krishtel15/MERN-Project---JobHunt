import Feedback from '../models/Feedback.js'; // Use ES module import with .js extension

// Add feedback
export const addFeedback = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const feedback = new Feedback({
      user: req.user.id, // Assuming user is authenticated
      rating,
      comment,
    });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
};

// Fetch feedbacks
export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'name');
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedbacks' });
  }
};
