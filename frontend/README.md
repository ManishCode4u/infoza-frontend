# InfozaTech

A full-stack project with a React frontend and Node.js backend.

## 🚀 How to Run the Project

### 1. Backend Setup
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your credentials.
4. Start the server:
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Open a **new** terminal in the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and set `VITE_API_URL=http://localhost:5000`.
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Follow the local URL (usually `http://localhost:5173`) to view the site.

## 🌐 Deployment Config
- **Frontend**: Designed for Netlify (use `VITE_API_URL` for the backend endpoint).
- **Backend**: Designed for Render (uses `process.env.PORT` and configured CORS).
