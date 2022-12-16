DevCamper API
Backend API for DevCamper application, which is a bootcamp directory website

Prerequisites
Rename "config/config.example.env" to "config/config.env" and update to your own values
Node.js
MongoDB or MongoDB Atlas account
Postman (optional) - to test the API endpoints

Install Dependencies
npm install
Run App
# Run in dev mode
npm run dev

# Run in prod mode
npm start


# Database Seeder
To seed the database with users, bootcamps, courses and reviews with data from the "_data" folder, run:

# Destroy all data
node seeder -d

# Import all data
node seeder -i
