import { useState } from "react";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";
import { generateReadme } from "../utils/readmeGenerator";


function BlueprintViewer({ blueprint, projectName }) {
  if (!blueprint) return null;
  const downloadPDF = () => {
  if (!blueprint) return;

  const pdf = new jsPDF();

  let y = 20;

  const pageHeight = 280;

  const addSection = (title, text) => {
    if (y > pageHeight) {
      pdf.addPage();
      y = 20;
    }

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(15);
    pdf.text(title, 15, y);

    y += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    const lines = pdf.splitTextToSize(text, 180);

    pdf.text(lines, 15, y);

    y += lines.length * 6 + 8;
  };

  pdf.setFontSize(22);
  pdf.setFont("helvetica", "bold");
  pdf.text("Generated Software Blueprint", 15, y);

  y += 15;

  addSection("Overview", blueprint.overview);

  addSection(
    "Features",
    blueprint.features.map(item => `• ${item}`).join("\n")
  );

  addSection(
    "Tech Stack",
    Object.entries(blueprint.techStack)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")
  );

  addSection(
    "Folder Structure",
    blueprint.folderStructure.join("\n")
  );

  addSection(
    "Database Design",
    blueprint.databaseDesign.join("\n")
  );

  addSection(
    "Difficulty",
    `Level: ${blueprint.difficulty.level}\nReason: ${blueprint.difficulty.reason}`
  );

  addSection(
    "Estimated Time",
    blueprint.estimatedTime
  );

  addSection(
    "Team Size",
    blueprint.teamSize
  );

  addSection(
    "Roadmap",
    blueprint.roadmap.map(step => `• ${step}`).join("\n")
  );

  addSection(
    "Future Improvements",
    blueprint.futureImprovements.map(item => `• ${item}`).join("\n")
  );

  pdf.save("CodeCanvasAI-Blueprint.pdf");
};
const downloadReadme = () => {
  const markdown = generateReadme(blueprint, "Generated Project");

  const blob = new Blob([markdown], {
    type: "text/markdown",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "README.md";

  link.click();

  URL.revokeObjectURL(url);
};
const downloadJSON = () => {
  const blob = new Blob(
    [JSON.stringify(blueprint, null, 2)],
    {
      type: "application/json",
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "blueprint.json";

  link.click();

  URL.revokeObjectURL(url);
};

  const [copied, setCopied] = useState(false);
  
  return (
    <div className="mt-8 w-full rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-xl">

      {/* Header */}
     <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mb-4">

  <button
    onClick={downloadPDF}
   className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white"
  >
     Download PDF
  </button>
<button
  onClick={downloadReadme}
  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white"
>
   README
</button>
<button
  onClick={downloadJSON}
  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white"
>
  JSON
</button>
  <button
    onClick={() => {
      navigator.clipboard.writeText(
        JSON.stringify(blueprint, null, 2)
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }}
    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white"
  >
    {copied ? " Copied!" : " Copy"}
  </button>

</div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Overview */}

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10">

          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            📘 Overview
          </h3>

         <p className="text-slate-300 leading-7">
  {blueprint.overview}
</p>
        </div>

        {/* Features */}

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10">

          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            🚀 Features
          </h3>

          <ul className="space-y-3">

  {blueprint.features.map((feature, index) => (

    <li
      key={index}
      className="flex items-start gap-3 text-slate-300"
    >
      <span className="text-green-400 mt-1">✔</span>

      <span>{feature}</span>

    </li>

  ))}

</ul>

        </div>

        {/* Tech Stack */}

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10">

          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            🛠 Tech Stack
          </h3>

     <div className="space-y-4">

  <div>
    <p className="text-sm text-slate-400 mb-2">Frontend</p>

    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
      {blueprint.techStack.frontend}
    </span>
  </div>

  <div>
    <p className="text-sm text-slate-400 mb-2">Backend</p>

    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
      {blueprint.techStack.backend}
    </span>
  </div>

  <div>
    <p className="text-sm text-slate-400 mb-2">Database</p>

    <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-300">
      {blueprint.techStack.database}
    </span>
  </div>

  <div>
    <p className="text-sm text-slate-400 mb-2">Authentication</p>

    <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300">
      {blueprint.techStack.authentication}
    </span>
  </div>

  <div>
    <p className="text-sm text-slate-400 mb-2">Deployment</p>

    <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">
      {blueprint.techStack.deployment}
    </span>
  </div>

</div>

        </div>

        {/* Difficulty */}

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10">

          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            ⚡ Difficulty
          </h3>

         <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-400 font-semibold">
  {blueprint.difficulty.level}
</span>

         <p className="mt-3 text-slate-300 leading-7">
  {blueprint.difficulty.reason}
</p>
        </div>

      </div>

      {/* Roadmap */}

<div className="mt-10">

  <h3 className="text-2xl font-bold text-cyan-400 mb-6">
    📅 Development Roadmap
  </h3>

  <div className="relative border-l-2 border-cyan-500 ml-4">

    {blueprint.roadmap.map((step, index) => (

      <div
        key={index}
        className="mb-8 ml-6 relative"
      >

        <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900"></div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 transition">

          <p className="text-slate-300 leading-7">
            {step}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

    </div>
  );
}

export default BlueprintViewer;


