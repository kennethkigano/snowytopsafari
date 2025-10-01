# SnowyTop Safaris Database Installation Guide

## Database Export Summary

The current database has been exported to `snowytop_safaris_complete.sql` containing:

- **Complete schema**: All 8 tables with proper constraints and sequences
- **All data**: 49 records across all tables including:
  - 17 travel itineraries
  - 5 team members  
  - 3 fleet vehicles
  - Plus bookings, reviews, donations, inquiries, and volunteers
- **Clean installation**: Drops existing tables if present

## Quick Installation

### Option 1: Using PostgreSQL Command Line

```bash
# Create a new database
createdb snowytop_safaris

# Import the complete database
psql snowytop_safaris < snowytop_safaris_complete.sql
```

### Option 2: Using psql with connection string

```bash
# Replace with your database URL
psql "postgresql://username:password@localhost:5432/your_database" < snowytop_safaris_complete.sql
```

### Option 3: Using Replit Database

```bash
# In your Replit environment
psql "$DATABASE_URL" < snowytop_safaris_complete.sql
```

## Step-by-Step Local Setup

### 1. Install PostgreSQL

**macOS (using Homebrew):**
```bash
brew install postgresql
brew services start postgresql
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download from [PostgreSQL official website](https://www.postgresql.org/download/windows/)

### 2. Create Database and User

```bash
# Connect to PostgreSQL
sudo -u postgres psql

# Create database and user
CREATE DATABASE snowytop_safaris;
CREATE USER safaris_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE snowytop_safaris TO safaris_user;
\q
```

### 3. Import Database

```bash
# Import the complete database
psql -U safaris_user -d snowytop_safaris < snowytop_safaris_complete.sql
```

### 4. Configure Environment Variables

Create a `.env` file in your project root:

```env
DATABASE_URL=postgresql://safaris_user:your_password@localhost:5432/snowytop_safaris
NODE_ENV=development
RESEND_API_KEY=your_resend_key
BREVO_API_KEY=your_brevo_key
STRIPE_SECRET_KEY=your_stripe_key
```

### 5. Install Dependencies and Run

```bash
# Install dependencies
npm install

# Push schema to ensure everything is synced
npm run db:push

# Start the application
npm run dev
```

## Verification

After installation, verify your database contains:

```sql
-- Check all tables exist
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Verify data counts
SELECT 'itineraries' as table_name, COUNT(*) as count FROM itineraries
UNION ALL
SELECT 'team_members', COUNT(*) FROM team_members
UNION ALL
SELECT 'fleet_vehicles', COUNT(*) FROM fleet_vehicles;
```

Expected results:
- itineraries: 17 records
- team_members: 5 records  
- fleet_vehicles: 3 records

## Database Schema Overview

### Core Tables

1. **itineraries** - Travel packages and safari experiences
2. **team_members** - Staff and guide information
3. **fleet_vehicles** - Safari vehicle fleet details
4. **bookings** - Customer booking requests
5. **reviews** - Customer feedback and ratings
6. **donations** - Donation tracking
7. **inquiries** - General customer inquiries
8. **volunteers** - Volunteer program applications

### Key Features

- **Auto-incrementing IDs** for all tables
- **JSONB fields** for complex data (day-by-day itineraries)
- **Array fields** for lists (highlights, features, skills)
- **Automatic timestamps** for creation tracking
- **Default values** for common fields

## Troubleshooting

### Permission Issues
```bash
# Grant permissions if needed
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO safaris_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO safaris_user;
```

### Connection Issues
- Ensure PostgreSQL is running: `brew services start postgresql` (macOS)
- Check connection string format
- Verify username/password combination

### Data Import Errors
- Ensure database is empty before import
- Check PostgreSQL version compatibility
- Verify file encoding is UTF-8

## File Contents

The export includes:

- **Schema**: Complete table definitions with constraints
- **Sequences**: Auto-increment sequences for primary keys  
- **Data**: All current application data
- **Indexes**: Primary key constraints
- **Clean setup**: Drops existing tables if present

## Next Steps

After successful installation:

1. Verify the application runs: `npm run dev`
2. Check the website loads at `http://localhost:5000`
3. Test database connectivity through the application
4. Customize data as needed for your environment

Your SnowyTop Safaris application is now ready to run locally with the complete production database!