 import IdeaInput from "../components/IdeaInput";

function Hero() {
  return (
   <section className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-screen pt-12 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
    <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/40 blur-3xl animate-floatGlow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl animate-floatGlow"></div>
       <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-floatGlow"></div>
      <div className="relative z-10 flex flex-col items-center w-full">
     <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
  Turn Ideas Into
  <br />
  <span className="text-cyan-400">
    Production-Ready Blueprints
  </span>
</h1>
<p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed text-center">
  Transform your software idea into a complete development blueprint powered by AI.
  Get architecture, roadmap, folder structure, tech stack, and implementation guidance in seconds.
</p>

     <div id="generator" className="w-full flex justify-center">
  <IdeaInput />
</div>
     </div>

    </section>
  );
}

export default Hero;