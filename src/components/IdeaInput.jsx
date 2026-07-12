import { useState } from "react";
import { generateBlueprint } from "../services/ai";
import BlueprintViewer from "./BlueprintViewer";
import ArchitectureDiagram from "./ArchitectureDiagram";
import LoadingScreen from "./LoadingScreen";


function IdeaInput() {
    const [idea, setIdea] = useState("");
    const [loading, setLoading] = useState(false);
     const [blueprint, setBlueprint] = useState("");
     

async function handleGenerate() {
  if (!idea.trim()) {
    alert("Please enter a project idea.");
    return;
  }

  try {
    setLoading(true);
    const startTime = Date.now();
    const result = await generateBlueprint(idea);
    const elapsed = Date.now() - startTime;
    const minimumLoadingTime = 1200;
    if (elapsed < minimumLoadingTime) {
  await new Promise((resolve) =>
    setTimeout(resolve, minimumLoadingTime - elapsed)
  );
}
    setBlueprint(result);

  } catch (error) {
    console.error(error);
    alert("Something went wrong while generating the blueprint.");
  } finally {
    setLoading(false);
  }
}
    return (
       <div className="w-full max-w-3xl mt-6 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center">
        <p className="text-slate-300 font-medium self-start mb-2">
  Describe your project idea
</p>
        <textarea
  value={idea}
  onChange={(e) => setIdea(e.target.value)}
  className="w-full p-4 h-44 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  placeholder="Example: Build an AI resume builder with authentication, dashboard, and PDF export..."
  
/>
        <button
         onClick={handleGenerate}
         disabled={loading}
  className={`mt-6 px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
    loading
      ? "bg-slate-600 cursor-not-allowed"
      : "bg-cyan-500 hover:bg-cyan-600 hover:scale-105 shadow-lg shadow-cyan-500/30"
  }`}
>
  {loading ? "Generating..." : "Generate Blueprint"}
  </button>
{loading ? (
  <LoadingScreen />
) : (
  <>
    <BlueprintViewer blueprint={blueprint} />
    <ArchitectureDiagram chart={blueprint?.mermaid} />
  </>
)}
        </div>
        
    );
  }
export default IdeaInput;
