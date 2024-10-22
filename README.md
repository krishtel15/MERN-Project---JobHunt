Description
Job Hunt is a job search portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to search for job listings, submit feedback, and filter jobs based on various criteria. It features user authentication, a feedback submission system with ratings, and an interactive job display.

Features
User authentication with cookies and JWT
Job listings with filtering options
Feedback form with a rating system
Responsive design for both mobile and desktop views
Technologies Used
Frontend: React.js, Vite
Backend: Node.js, Express.js
Database: MongoDB
State Management: Redux
UI Components: ShadCN (or any other UI library you are using)
Deployment: Cloudinary for file uploads
Getting Started
Prerequisites
Make sure you have the following installed on your machine:

Node.js
npm (Node Package Manager)
MongoDB (local or cloud instance)
Any other required dependencies or services
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd job-hunt
Install the backend dependencies:

bash
Copy code
cd backend
npm install
Install the frontend dependencies:

bash
Copy code
cd frontend
npm install
Configuration
Database Setup:

Create a MongoDB cluster (if using MongoDB Atlas) and get your connection URI.

Create a .env file in the backend folder and add the following variables:

makefile
Copy code
MONGO_URI=<your-mongodb-connection-uri>
JWT_SECRET=<your-jwt-secret-key>
Run the Application:

Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm run dev
Usage
Access the application at http://localhost:3000 (or the port specified in your configuration).
Users can register, log in, search for jobs, and submit feedback through the UI.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgements
MongoDB
Express.js
React.js
Node.js
