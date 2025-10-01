#!/bin/bash

# SnowyTop Safaris - Local Deployment Script
# This script will help you build and run the SnowyTop Safaris website locally

echo "===== SnowyTop Safaris Local Deployment ====="
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

# Build the application
echo "Building the application..."
npm run build
echo "Build completed successfully."
echo ""

# Start the application
echo "Starting the application in production mode..."
echo "The application will be available at http://localhost:3000"
echo "Press Ctrl+C to stop the server."
echo ""
npm run start