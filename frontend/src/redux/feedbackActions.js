import axios from "axios";

export const submitFeedback = (feedbackData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/feedback", feedbackData); // Update URL as needed
      dispatch({
        type: 'SUBMIT_FEEDBACK',
        payload: response.data,
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Handle error as necessary (e.g., dispatch an error action)
    }
  };
};
