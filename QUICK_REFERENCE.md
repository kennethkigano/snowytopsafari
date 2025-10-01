# SnowyTop Safaris - Quick Reference

## Common Commands

### Development Mode
```bash
# Start in development mode
npm run dev

# Or use the convenience script (includes database setup)
./dev-localhost.sh --migrate
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm run start

# Or use the convenience script (build & start)
./deploy-localhost.sh
```

### Database Operations
```bash
# Push schema changes to database
npm run db:push
```

## Directory Structure

```
snowytop-safaris/
├── client/               # Frontend React code
│   ├── public/           # Static assets
│   │   └── images/       # Image assets
│   └── src/              # React source code
│       ├── components/   # Reusable UI components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and helpers
│       └── pages/        # Page components
├── server/               # Backend Express code
│   ├── db.ts             # Database connection
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage implementation
│   └── vite.ts           # Vite integration
├── shared/               # Shared code between frontend/backend
│   └── schema.ts         # Database schema definitions
├── .env                  # Environment variables
├── drizzle.config.ts     # Drizzle ORM configuration
├── package.json          # Project dependencies and scripts
└── vite.config.ts        # Vite build configuration
```

## Configuration Files

### .env
```
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/snowytop_safaris
# Add any other environment variables here
```

### drizzle.config.ts
Contains Drizzle ORM configuration for database migrations.

### vite.config.ts
Contains Vite configuration for the frontend build process.

## Port Information

- Development server: http://localhost:5173
- Production server: http://localhost:3000

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js
- **API**: REST API with Express routes
- **State Management**: React Query
- **Forms**: React Hook Form with Zod validation