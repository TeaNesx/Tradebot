# Tradebot Multi-Tenant System

This project implements a multi-tenant system with separate admin and user roles, using Laravel for the backend and Next.js for the frontend.

## Project Structure

- `backend/`: Laravel backend with multi-tenant authentication and API endpoints
- `frontend/`: Next.js frontend with role-based UI components

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   composer install
   ```

3. Copy the environment file and configure your database:
   ```
   cp .env.example .env
   ```

4. Generate application key:
   ```
   php artisan key:generate
   ```

5. Run migrations:
   ```
   php artisan migrate
   ```

6. Seed the database with test users:
   ```
   php artisan db:seed
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   ```
   cp .env.example .env.local
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Authentication Flow

1. Users visit the application and are redirected to the login page
2. After successful login, users are redirected to their respective dashboards based on their role:
   - Admins are redirected to `/admin/dashboard`
   - Regular users are redirected to `/user/dashboard`

## API Endpoints

### Authentication

- `POST /api/auth/login`: Login endpoint
- `POST /api/auth/logout`: Logout endpoint
- `GET /api/auth/user`: Get authenticated user information

### Admin Routes

- `GET /api/admin/dashboard`: Get admin dashboard data
- `GET /api/admin/users`: Get list of all users

### User Routes

- `GET /api/user/dashboard`: Get user dashboard data
- `GET /api/user/profile`: Get user profile information

## Security

- Role-based access control using custom middleware
- Sanctum for API token authentication
- CORS configured for secure cross-origin requests

## Development

To add new features or modify existing ones, follow these guidelines:

1. Backend changes:
   - Add new controllers in the appropriate namespace (`Admin` or `User`)
   - Register new routes in `routes/api.php` with the correct middleware
   - Use the request()->user() method to access the authenticated user

2. Frontend changes:
   - Add new pages in the appropriate directory (`admin` or `user`)
   - Use the existing layout components for consistent UI
   - Fetch data from the API using the fetch API with credentials included

## Test Users

After seeding the database, you can use the following test users:

- Admin:
  - Email: admin@example.com
  - Password: password

- User:
  - Email: user@example.com
  - Password: password
