import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateBlueprint(idea) {
 const prompt = `
You are a senior software architect.

Generate a detailed software blueprint for this project.

Project Idea:
${idea}

Return ONLY valid JSON.

Do not use markdown.
Do not wrap with \`\`\`.
Do not explain anything.

Return exactly this structure:

{
  "overview": "",
  "features": [
    ""
  ],
  "techStack": {
    "frontend": "",
    "backend": "",
    "database": "",
    "authentication": "",
    "deployment": ""
  },
  "folderStructure": [
    ""
  ],
  "databaseDesign": [
    ""
  ],
  "difficulty": {
    "level": "",
    "reason": ""
  },
  "estimatedTime": "",
  "teamSize": "",
  "roadmap": [
    ""
  ],
  "futureImprovements": [
  ""
],

"mermaid": ""
}
Also generate a Mermaid flowchart.

The mermaid field must contain ONLY Mermaid syntax.

Example:

graph TD
A[React Frontend]
B[Node.js Backend]
C[MongoDB]
D[JWT Authentication]

A --> B
B --> C
B --> D

Do not wrap it inside markdown.
Return only valid JSON.
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

  const content = response.choices[0].message.content;

try {
  return JSON.parse(content);
} catch (error) {
  console.error("Invalid AI response:", content);

  throw new Error("The AI returned an invalid blueprint.");
}
}