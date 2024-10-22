import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        feedbacks: [],
    },
    reducers: {
        submitFeedback: (state, action) => {
            state.feedbacks.push(action.payload);
        },
       
    },
});

export const { submitFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
