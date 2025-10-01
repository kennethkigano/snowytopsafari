# SnowyTop Safaris - Tourism Website

A dynamic tourism platform that connects travelers with authentic Kenyan wildlife and conservation experiences through innovative, community-driven digital interactions.

## Project Overview

This project is a full-featured Kenya tourism website built with modern web technologies. It showcases diverse travel itineraries, community engagement opportunities, volunteer programs, team members, and the safari fleet, all with a responsive design optimized for all devices.

## Features

- Interactive itinerary browsing with detailed day-by-day breakdowns
- Community engagement initiatives with impact tracking
- Online booking system with date range picker
- Secure donation system with multiple payment options
- Teams and fleet showcase pages
- Volunteers engagement platform
- Dynamic content managed through PostgreSQL database
- Responsive design for all devices
- Kenya-themed animated loading indicators
- Social media sharing integration
- Advanced search and filtering
- Review and rating system

## Tech Stack

- **Frontend**: React with Vite, TypeScript
- **UI Components**: Tailwind CSS with shadcn/ui components
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack Query (React Query)
- **Routing**: Wouter
- **Key Technologies**: Embla Carousel, Date-fns, React Hook Form, Zod

## Setup Guide

### Prerequisites

1. Node.js (v18 or later)
2. PostgreSQL (v14 or later)
3. npm package manager

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd kenya-safari-adventures
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up the Database

1. Install PostgreSQL if you haven't already:
   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install postgresql postgresql-contrib

   # macOS with Homebrew
   brew install postgresql
   ```

2. Start PostgreSQL service:
   ```bash
   # Ubuntu/Debian
   sudo service postgresql start

   # macOS
   brew services start postgresql
   ```

3. Create a database:
   ```bash
   # Access PostgreSQL CLI
   sudo -u postgres psql

   # Create database
   CREATE DATABASE kenya_tourism;

   # Create user
   CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';

   # Grant privileges
   GRANT ALL PRIVILEGES ON DATABASE kenya_tourism TO myuser;
   
   # Exit PostgreSQL CLI
   \q
   ```

### Step 4: Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Database connection
DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/kenya_tourism

# For local development, use these defaults
PGUSER=myuser
PGPASSWORD=mypassword
PGDATABASE=kenya_tourism
PGHOST=localhost
PGPORT=5432
```

### Step 5: Initialize Database Schema

Push the database schema using Drizzle:

```bash
npm run db:push
```

### Step 6: Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Step 7: Verify Installation

- Check that the homepage loads with the image carousel
- Verify that the itineraries page displays properly
- Confirm that the navigation menu works correctly

## Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   │   ├── ui/       # Base UI components from shadcn
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── App.tsx       # Main application component
├── server/           # Backend Express server
│   ├── routes.ts     # API routes
│   ├── storage.ts    # Data storage interface
│   ├── db.ts         # Database connection
│   └── index.ts      # Server entry point
├── shared/           # Shared code between frontend and backend
│   └── schema.ts     # Database schema and types
└── package.json      # Project dependencies and scripts
```

## Key Components

### Pages

- **Home** (`client/src/pages/home.tsx`): Landing page with hero carousel and featured content
- **Itineraries** (`client/src/pages/itineraries.tsx`): Browse all safari packages
- **Itinerary Detail** (`client/src/pages/itinerary-detail.tsx`): Day-by-day breakdown of safari
- **Teams** (`client/src/pages/teams.tsx`): Team members showcase 
- **Fleet** (`client/src/pages/fleet.tsx`): Safari vehicles information
- **Volunteers** (`client/src/pages/volunteers.tsx`): Volunteer program information
- **Donate** (`client/src/pages/donate.tsx`): Donation options with payment integration
- **Contact** (`client/src/pages/contact.tsx`): Contact form with Google Maps integration

### Feature Components

- **Hero Section** (`client/src/components/hero-section.tsx`): Main landing page hero
- **Image Carousel** (`client/src/components/image-carousel.tsx`): Auto-navigating image slider
- **Navigation Bar** (`client/src/components/nav-bar.tsx`): Responsive site navigation
- **Donation Form** (`client/src/components/donation-form.tsx`): Payment form with validation
- **Loading Indicators** (`client/src/components/ui/loading.tsx`): Kenya-themed loading animations
- **Share Buttons** (`client/src/components/share-buttons.tsx`): Social media sharing

## Database Schema

The application uses PostgreSQL with Drizzle ORM. Key data models include:

- **Itineraries**: Safari packages with detailed information
- **Reviews**: User reviews and ratings for itineraries
- **Bookings**: User booking requests
- **Team Members**: Staff profiles with roles and experience
- **Fleet Vehicles**: Safari vehicle information
- **Volunteers**: Volunteer program participants
- **Donations**: Record of user donations
- **Inquiries**: User contact form submissions

## API Routes

- `GET /api/itineraries` - List all itineraries
- `GET /api/itineraries/:id` - Get specific itinerary details
- `GET /api/team-members` - List all team members
- `GET /api/fleet-vehicles` - List all fleet vehicles
- `GET /api/volunteers` - List all volunteers
- `GET /api/itineraries/:id/reviews` - Get reviews for an itinerary
- `POST /api/bookings` - Create a booking request
- `POST /api/inquiries` - Submit contact form
- `POST /api/donations` - Record donation
- `POST /api/reviews` - Submit itinerary review

## Local Deployment Scripts

The project includes convenience scripts to make local development and deployment easier:

### Using Development Script

For development mode with hot-reloading:

```bash
# Make script executable
chmod +x dev-localhost.sh

# Run with optional database migration
./dev-localhost.sh --migrate
```

This script will:
- Set up the necessary environment variables
- Install all dependencies
- Run database migrations if the `--migrate` flag is used
- Start the application in development mode on `http://localhost:5173`

### Using Production Deployment Script

For a production-like build and deployment:

```bash
# Make script executable
chmod +x deploy-localhost.sh

# Build and run the application
./deploy-localhost.sh
```

This script will:
- Set up the necessary environment variables
- Install all dependencies
- Build the application for production
- Start the application in production mode on `http://localhost:3000`

## Documentation Files

The following documentation files are available to help with local setup and development:

- `LOCAL_SETUP_GUIDE.md`: Comprehensive setup instructions for local development
- `QUICK_REFERENCE.md`: Quick reference for common commands and directory structure
- `LOCAL_PACKAGE.json`: Package configuration optimized for local development

## Hosting on Plex Linux Platform

### Prerequisites for Plex Linux Deployment

1. A Plex Linux server with:
   - Node.js (v18 or later)
   - PostgreSQL (v14 or later)
   - Nginx or Apache web server
   - PM2 process manager for Node.js applications

### Step 1: Server Preparation

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm if not already installed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install PostgreSQL if not already installed
sudo apt install -y postgresql postgresql-contrib

# Install Nginx
sudo apt install -y nginx
```

### Step 2: Application Deployment

1. Clone the repository or upload the application files to your server:

```bash
# Clone from repository
git clone <repository-url> /var/www/snowytop-safaris
cd /var/www/snowytop-safaris

# Or upload your project files to the server via SFTP/SCP
```

2. Install dependencies:

```bash
npm install --production
```

3. Build the application for production:

```bash
npm run build
```

### Step 3: Database Setup

1. Set up PostgreSQL database:

```bash
# Access PostgreSQL CLI
sudo -u postgres psql

# Create database
CREATE DATABASE snowytop_safaris;

# Create user with password
CREATE USER plex_user WITH ENCRYPTED PASSWORD 'your_secure_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE snowytop_safaris TO plex_user;

# Exit PostgreSQL CLI
\q
```

2. Create a `.env` file with production database credentials:

```bash
# Create and edit .env file
nano .env
```

3. Add the following environment variables:

```env
# Database connection
DATABASE_URL=postgresql://plex_user:your_secure_password@localhost:5432/snowytop_safaris
PGUSER=plex_user
PGPASSWORD=your_secure_password
PGDATABASE=snowytop_safaris
PGHOST=localhost
PGPORT=5432
```

4. Initialize database schema:

```bash
npm run db:push
```

### Step 4: Setup PM2 for Process Management

1. Start the application with PM2:

```bash
# Navigate to your application directory
cd /var/www/snowytop-safaris

# Start the application
pm2 start server/index.js --name "snowytop-safaris"

# Save the PM2 process list to start on system reboot
pm2 save

# Setup PM2 to start on system startup
pm2 startup
```

2. Monitor your application:

```bash
pm2 status
pm2 logs snowytop-safaris
```

### Step 5: Nginx Configuration

1. Create a new Nginx server block configuration:

```bash
sudo nano /etc/nginx/sites-available/snowytop-safaris
```

2. Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    location / {
        proxy_pass http://localhost:5000;  # Default port used by the app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. Enable the server block and restart Nginx:

```bash
# Create symlink to enable the site
sudo ln -s /etc/nginx/sites-available/snowytop-safaris /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 6: SSL/TLS Configuration (Optional but Recommended)

1. Install Certbot for free Let's Encrypt SSL certificates:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

2. Obtain and configure SSL certificate:

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Step 7: Firewall Configuration

Ensure that the necessary ports are open:

```bash
# Allow HTTP, HTTPS, and SSH
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh

# Enable firewall
sudo ufw enable
```

### Deploying with a Custom Domain on Replit

If you're using Replit for hosting and want to use a custom domain instead of the default `.replit.app` domain:

1. **Purchase a Domain**: Buy a domain from a domain registrar like Namecheap, GoDaddy, etc.

2. **Access Replit Deployments**: 
   - Click the "Deployments" tab in your Replit workspace
   - Click "Deploy" to start the deployment process if you haven't already

3. **Configure Custom Domain**:
   - In the deployment settings, look for "Custom Domains" or "Domains" section
   - Click "Add Domain" or similar option
   - Enter your custom domain name (e.g., `yourdomainname.com`)

4. **Set Up DNS Records**:
   - Replit will provide you with DNS records to set up (typically a CNAME record)
   - Go to your domain registrar's website
   - Navigate to the DNS settings for your domain
   - Add a CNAME record pointing your domain to your Replit deployment URL
     ```
     Type: CNAME
     Host: @ (or www)
     Value: your-replit-deployment-url.replit.app
     TTL: Automatic or 3600
     ```
   - Some registrars might require an A record instead of a CNAME for the root domain:
     ```
     Type: A
     Host: @
     Value: The IP address Replit provides
     TTL: Automatic or 3600
     ```

5. **Verify Domain Ownership**:
   - Replit may ask you to verify ownership of the domain
   - This is typically done by adding a TXT record to your domain's DNS settings
   - Follow the instructions provided by Replit for this step

6. **Wait for DNS Propagation**:
   - DNS changes can take up to 48 hours to fully propagate
   - You can check propagation status using tools like [DNSChecker](https://dnschecker.org/)

7. **Enable HTTPS**:
   - Once your domain is connected, make sure HTTPS is enabled
   - Replit usually handles this automatically with Let's Encrypt

Note: If you don't see the option to add a custom domain in your Replit deployment settings, you may need to upgrade to a paid Replit plan that supports custom domains.

### Regular Maintenance

1. Set up automatic updates for the application:

```bash
# Pull latest changes
cd /var/www/snowytop-safaris
git pull origin main

# Install dependencies and rebuild
npm install --production
npm run build

# Restart the application
pm2 restart snowytop-safaris
```

2. Set up database backups:

```bash
# Create a backup script
sudo nano /usr/local/bin/backup-db.sh
```

3. Add the following content to the backup script:

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/postgres"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DB_NAME="snowytop_safaris"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Create backup
pg_dump -U postgres $DB_NAME > $BACKUP_DIR/$DB_NAME\_$TIMESTAMP.sql

# Keep only the last 7 days of backups
find $BACKUP_DIR -name "$DB_NAME\_*.sql" -type f -mtime +7 -delete
```

4. Make the script executable and set up a cron job:

```bash
sudo chmod +x /usr/local/bin/backup-db.sh

# Add to crontab to run daily at 2AM
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-db.sh") | crontab -
```

## Troubleshooting

### Database Connection Issues

1. Verify PostgreSQL service is running:
   ```bash
   # Check status
   sudo systemctl status postgresql
   ```

2. Test database connection:
   ```bash
   psql -U postgres -d snowytop_safaris -h localhost
   ```

3. Common errors:
   - "role does not exist": Create the user role in PostgreSQL
   - "database does not exist": Create the database
   - "permission denied": Grant proper privileges

### Application Startup Issues

1. Check for port conflicts:
   ```bash
   # Find processes using port 5000
   sudo netstat -tuln | grep 5000
   ```

2. Verify environment variables are set correctly
   
3. Check PM2 logs for errors:
   ```bash
   pm2 logs snowytop-safaris
   ```

4. Clear node_modules and reinstall if needed:
   ```bash
   rm -rf node_modules
   npm install
   ```

## Customization Guide

See `customization.md` for detailed information on how to:
- Add or modify itineraries
- Update team member information
- Add fleet vehicles
- Customize volunteer opportunities
- Manage database content

## Performance Optimization

The application implements several performance optimizations:
- Responsive image loading
- Code splitting with dynamic imports
- Server-side data caching
- Optimized animations and transitions

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.