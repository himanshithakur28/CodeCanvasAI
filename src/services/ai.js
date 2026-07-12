import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateBlueprint(idea) {
  const prompt = `
You are a senior software architect.

Generate a complete software blueprint for the following project.

Project Idea:
${idea}

Include the following sections:

1. Project Overview
2. Core Features
3. Recommended Tech Stack
4. Suggested Folder Structure
5. Database Design (if required)
6. Difficulty Level with explanation
7. Estimated Development Time
8. Recommended Team Size
9. Development Roadmap
10. Future Improvements

Return everything in Markdown.
`;

  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}