# Book Project

A Node.js/Express API for managing books, authors, and orders.

## Features

- Book management (CRUD operations)
- Author management
- Order management
- MongoDB integration
- RESTful API endpoints

## API Endpoints

- `/books` - Book operations
- `/authors` - Author operations  
- `/orders` - Order operations

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/book_project
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your project:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel dashboard:
   - `MONGO_URI`: Your MongoDB connection string
   - `NODE_ENV`: production

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (optional, defaults to 5000)
- `NODE_ENV`: Node environment (production/development) 