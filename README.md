# Finance Tracker

A simple personal finance tracker web application where users can add income and expense transactions, view summaries, and analyze spending.

## Live Links

Frontend: https://finance-tracker-4al4wn4uc-hudha.vercel.app  
Backend: https://finance-tracker-backend-production-2407.up.railway.app  

## Features

- Add transactions (income and expense)
- Fields: amount, category, type, date, note (optional)
- View list of all transactions
- Filter transactions by category or date
- Summary includes:
  - Total income
  - Total expense
  - Net balance
  - Top spending category
- Chart showing spending by category
- Simple insight based on spending data

## Tech Stack

Frontend:
- React
- Axios

Backend:
- Node.js
- Express.js

Database:
- MongoDB

## Project Structure

finance-tracker/
client/
server/

## Setup Instructions

### Clone Repository
git clone https://Fathimathulhudha/finance-tracker.git
git clone https://Fathimathulhudha/finance-tracker-backend.git
cd finance-tracker

### Backend Setup
cd server
npm install
npm start

### Frontend Setup
cd client
npm install
npm start

## Notes

- Do not push node_modules or .env to GitHub
- Update API URL before deployment
- Backend must be running for frontend to work properly
