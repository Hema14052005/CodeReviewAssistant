# Code Review Assistant

## Project Overview
Code Review Assistant automates code reviews by analyzing code structure, readability, and best practices using a backend API integrated with a large language model (LLM). Users can upload code files and receive detailed improvement suggestions.  
**Objective:** Provide meaningful insights and improvement suggestions for source code, helping developers write cleaner and more maintainable code.

## Folder Structure
CodeReviewAssistant/
├── backend/       # Express + LLM backend API
├── frontend/      # React + Vite frontend
├── README.md      # This file
├── .gitignore
└── other config files

## Features
- Upload source code files from the frontend
- Backend processes files and uses AI to provide review suggestions
- Optional dashboard to view reports
- API-based architecture for scalability

## Frontend Setup
cd frontend  
npm install  
npm run dev  
Open your browser at: http://localhost:5173

## Backend Setup
cd backend  
npm install  
npm run dev  
Create a `.env` file with your API key:  
OPENAI_API_KEY=your_api_key_here  
PORT=5000  
Backend runs at: http://localhost:5000

## Connecting Frontend & Backend
Update API calls in frontend to point to backend:  
const response = await axios.post("http://localhost:5000/api/review", formData);

## Deployment
- Frontend: Host on GitHub Pages, Vercel, or Netlify  
  Add to `frontend/package.json`:  
  "homepage": "https://<your-username>.github.io/CodeReviewAssistant"  
  "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" }  
  Deploy with: npm run deploy  
- Backend: Host on Render, Heroku, or Railway  
  Set environment variables on the host platform

## API Usage
- Endpoint: POST /api/review  
- Payload: FormData with code files  
- Response: JSON with review suggestions

## LLM Usage Guidance
Example prompt for code review:  
"Review this code for readability, modularity, and potential bugs, then provide improvement suggestions."

## Notes
- Do not commit `.env` or `node_modules/`  
- Keep `uploads/` folder local or add it to `.gitignore`
