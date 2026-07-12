export function generateReadme(blueprint, projectName = "My Project") {
  return `# ${projectName}

## 📖 Overview

${blueprint.overview}

---

## ✨ Features

${blueprint.features.map(f => `- ${f}`).join("\n")}

---

## 🛠 Tech Stack

| Technology | Used |
|------------|------|
${Object.entries(blueprint.techStack)
  .map(([key, value]) => `| ${key} | ${value} |`)
  .join("\n")}

---

## 📂 Folder Structure

\`\`\`
${blueprint.folderStructure.join("\n")}
\`\`\`

---

## 🗄 Database Design

${blueprint.databaseDesign.map(db => `- ${db}`).join("\n")}

---

## 🚀 Development Roadmap

${blueprint.roadmap.map(step => `- ${step}`).join("\n")}

---

## 🔮 Future Improvements

${blueprint.futureImprovements.map(item => `- ${item}`).join("\n")}

---

Generated using ❤️ CodeCanvasAI
`;
}