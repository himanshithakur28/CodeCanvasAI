import { useState } from "react";

function IdeaInput() {
    const [idea, setIdea] = useState("");
     function handleGenerate() {
     alert(idea);
}
    return (
       <div className="w-full max-w-3xl mt-6 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center">
        <p className="text-slate-300 font-medium self-start mb-2">
  Describe your project idea
</p>
        <textarea
  className="w-full p-4 h-44 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  placeholder="Example: Build an AI resume builder with authentication, dashboard, and PDF export..."
  value={idea}
  onChange={(e) => setIdea(e.target.value)}
/>
        <button
         onClick={handleGenerate}
  className="mt-6 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 hover:scale-105 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30"
>
   Generate Blueprint
</button>
        </div>
    );
}
export default IdeaInput;
