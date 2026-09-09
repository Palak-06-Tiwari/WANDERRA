🌍 Wanderra

Wanderra is a full-stack travel accommodation listing platform that allows users to explore, create, update, and manage travel property listings.

The application follows a server-side architecture using Node.js and Express.js, with MongoDB for database management and EJS for dynamically rendering web pages.

🚀 Features
View all travel accommodation listings
Create new property listings
View detailed information about each listing
Edit existing listings
Delete listings
Dynamic server-side rendering using EJS
Responsive user interface using Bootstrap
MongoDB integration for data storage and management


🛠️ Tech Stack
Frontend
HTML
CSS
Bootstrap
EJS
Backend
Node.js
Express.js
Database
MongoDB
Mongoose


📂 Project Architecture
User
  ↓
Express Server
  ↓
Routes
  ↓
MongoDB / Mongoose
  ↓
Data Processing
  ↓
EJS Templates
  ↓
Browser



⚙️ Installation
1. Clone the repository
git clone <your-repository-url>
2. Navigate to the project directory
cd Wanderra
3. Install dependencies
npm install
4. Start the application
node app.js

Or, if Nodemon is installed:

nodemon app.js
5. Open the application

Visit:

http://localhost:8080
📌 CRUD Operations



The application supports the following CRUD operations:

Create: Add new travel accommodation listings.
Read: View all listings and individual listing details.
Update: Modify existing listings.
Delete: Remove listings from the platform.


🗂️ Project Structure
Wanderra/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
│
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md


💡 Key Learning Outcomes
Building RESTful routes using Express.js
Implementing CRUD operations
Integrating MongoDB with Mongoose
Server-side rendering using EJS
Handling dynamic data in web applications
Creating reusable UI components using EJS partials
Following MVC-inspired project architecture
🔮 Future Improvements
User authentication and authorization
User reviews and ratings
Image upload functionality
Search and filtering options
Map integration
Improved mobile responsiveness