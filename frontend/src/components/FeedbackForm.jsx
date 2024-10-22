import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitFeedback } from "../redux/feedbackSlice"; // Import the action from the feedback slice

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(""); // State for rating

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback && rating) {
      dispatch(submitFeedback({ feedback, rating })); // Dispatch the feedback action with rating
      setFeedback(""); // Clear the feedback input after submission
      setRating(""); // Clear the rating after submission
    } else {
      alert("Please enter feedback and select a rating before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
        required
      />
      
      <div>
        <label>Rate your experience:</label>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                value={star}
                checked={rating === String(star)} // Check if this rating is selected
                onChange={(e) => setRating(e.target.value)} // Set the rating state
                required // Make sure to select a rating before submitting
              />
              {star} {star === 1 ? 'star' : 'stars'}
            </label>
          ))}
        </div>
      </div>
      
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
