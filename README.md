# 🌍 Wanderra

Wanderra is a full-stack travel accommodation listing platform that allows users to explore, create, update, and manage travel property listings.

The application follows a server-side architecture using Node.js and Express.js, with MongoDB for database management and EJS for dynamically rendering web pages.

---

## 🚀 Features

- **Explore Listings:** View all travel accommodation listings with essential details.
- **Create Listings:** Add new properties with custom details, prices, and locations.
- **Detailed Views:** Inspect individual listing details and information.
- **Edit & Update:** Modify existing property listings anytime.
- **Delete Listings:** Remove unwanted or obsolete listings safely.
- **Dynamic Server-Side Rendering:** Render pages seamlessly on the server using EJS.
- **Responsive Layout:** Clean UI design built with Bootstrap 5.
- **Database Persistence:** Real-time data storage and schema validation with MongoDB & Mongoose.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS (Embedded JavaScript)
- EJS-Mate (Layouts engine)

### Backend
- Node.js
- Express.js
- Method-Override

### Database
- MongoDB
- Mongoose (ODM)

---

## 📂 Project Architecture

```text
Client / Browser
       │
       ▼ (HTTP Request)
 Express Server (app.js)
       │
       ▼ (Queries / Mongoose Operations)
 Database Models (models/listing.js)
       │
       ▼ (Data Fetch / Persist)
 MongoDB Database
       │
       ▼ (Data Returned)
 View Engine (views/ + layouts/ + includes/)
       │
       ▼ (Rendered HTML + CSS Response)
 Client / Browser