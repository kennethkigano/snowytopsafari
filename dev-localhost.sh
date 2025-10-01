#!/bin/bash

# SnowyTop Safaris - Local Development Script
# This script will help you run the SnowyTop Safaris website in development mode locally

echo "===== SnowyTop Safaris Local Development ====="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js before proceeding."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm before proceeding."
    exit 1
fi

echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"
echo ""

# Check for .env file
if [ ! -f .env ]; then
    echo "Creating .env file with default settings..."
    echo "DATABASE_URL=postgresql://postgres:postgres@localhost:5432/snowytop_safaris" > .env
    echo ".env file created. Please update it with your actual database credentials."
    echo ""
fi

# Check if LOCAL_PACKAGE.json exists
if [ -f LOCAL_PACKAGE.json ]; then
    echo "Using LOCAL_PACKAGE.json for local development..."
    cp LOCAL_PACKAGE.json package.json
    echo "package.json updated for local development."
    echo ""
fi

# Install dependencies
echo "Installing dependencies..."
npm install
echo "Dependencies installed successfully."
echo ""

# Run database migrations if needed
if [ "$1" == "--migrate" ]; then
    echo "Running database migrations..."
    npm run db:push
    echo "Database migrations completed."
    echo ""
fi

# Start the application in development mode
echo "Starting the application in development mode..."
echo "The application will be available at http://localhost:5173"
echo "Press Ctrl+C to stop the server."
echo ""
npm run dev