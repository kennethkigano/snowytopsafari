# SnowyTop Safaris - Local Setup Guide

This guide will help you set up and run the SnowyTop Safaris website on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

1. **Node.js** (version 16.x or later) - [Download from nodejs.org](https://nodejs.org/)
2. **npm** (comes with Node.js installation)
3. **PostgreSQL** (version 13 or later) - [Download from postgresql.org](https://www.postgresql.org/download/)
4. **Git** (optional, for cloning the repository) - [Download from git-scm.com](https://git-scm.com/downloads)

## Step 1: Clone or Download the Project

### Option A: Clone with Git
```bash
git clone [repository-url]
cd snowytop-safaris
```

### Option B: Download ZIP
1. Download the project as a ZIP file
2. Extract it to your preferred location
3. Open a terminal/command prompt and navigate to the extracted folder

## Step 2: Install Dependencies

Run the following command to install all project dependencies:

```bash
npm install
```

This will install all the necessary packages listed in the `package.json` file.

## Step 3: Set Up the Database

1. Create a PostgreSQL database for the project:

```bash
# Connect to PostgreSQL
psql -U postgres

# In the PostgreSQL shell, create a new database
CREATE DATABASE snowytop_safaris;
\q
```

2. Configure the database connection by creating a `.env` file in the root directory with the following content (modify as needed):

```
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/snowytop_safaris
```

Replace `your_password` with your PostgreSQL password.

## Step 4: Initialize the Database Schema

Run the database migration to create the required tables:

```bash
npm run db:push
```

## Step 5: Start the Development Server

Start the development server with:

```bash
npm run dev
```

This will start both the backend server and the frontend development server.

## Step 6: Access the Website

Open your web browser and navigate to:

```
http://localhost:5173
```

The website should now be running locally on your machine.

## Troubleshooting

### Database Connection Issues

- Make sure PostgreSQL is running on your system
- Verify the database connection string in your `.env` file
- Check that the database user has the necessary permissions

### Port Conflicts

If port 5173 is already in use, you can modify the Vite configuration to use a different port by editing the `vite.config.ts` file.

### Missing Images or Assets

If you see missing images, make sure all assets are properly copied to the `client/public/images` directory.

## Building for Production

To create a production build:

```bash
npm run build
```

This will create optimized files in the `dist` directory.

To start the production server:

```bash
npm run start
```

## Additional Information

- The frontend is built with React, Vite, and TailwindCSS
- The backend uses Express.js
- Database operations are handled by Drizzle ORM
- Authentication is managed by Passport.js

For any specific questions or additional assistance, please refer to the project's README file or contact the development team.