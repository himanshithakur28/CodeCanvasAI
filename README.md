# CodeCanvasAI

**Turn Ideas into Production-Ready Software Blueprints using AI.**

CodeCanvasAI is an AI-powered web application that transforms a simple software idea into a comprehensive development blueprint in seconds. Instead of spending hours planning architecture, technologies, folder structures, and project roadmaps, developers receive an organized blueprint that helps them start building immediately.

## Live Demo

**Website:** https://code-canvas-ai-psi.vercel.app/

## GitHub Repository

https://github.com/himanshithakur28/CodeCanvasAI

---

## Features

* AI-powered software blueprint generation
* Project overview generation
* Recommended technology stack
* Feature planning
* Folder structure generation
* Database design suggestions
* Development roadmap
* Difficulty estimation
* Estimated development time
* Team size recommendation
* Interactive architecture diagrams using Mermaid
* Export blueprint as PDF
* Export README.md
* Export JSON
* Copy blueprint to clipboard
* Responsive modern UI
* Automatic deployment with Vercel

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### AI

* Groq API
* Llama 3

### Libraries

* Mermaid
* jsPDF
* React Markdown

### Deployment

* Vercel

---

## How It Works

1. Enter a software project idea.
2. The application sends the prompt to the AI model.
3. AI generates a structured software blueprint.
4. The blueprint is displayed in an interactive dashboard.
5. Users can export the blueprint as:

   * PDF
   * README.md
   * JSON

---

## Project Structure

```text
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── utils/
 ├── assets/
 └── App.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/himanshithakur28/CodeCanvasAI.git
```

Navigate into the project:

```bash
cd CodeCanvasAI
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_GROQ_API_KEY=your_api_key
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Future Improvements

* User authentication
* Save and manage multiple projects
* AI-generated ER diagrams
* Figma wireframe generation
* Cost estimation
* Team collaboration
* Multiple export formats
* Cloud project storage
* Multi-language support

---

## License

This project was created as a hackathon submission and is available for learning and demonstration purposes.
