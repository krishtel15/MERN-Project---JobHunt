const initialState = {
    feedbacks: [],
  };
  
  const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FEEDBACK':
        return {
          ...state,
          feedbacks: [...state.feedbacks, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default feedbackReducer;
  