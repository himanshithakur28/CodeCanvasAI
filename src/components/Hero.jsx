 import IdeaInput from "../components/IdeaInput";

function Hero() {
  return (
   <section className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-screen pt-12 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
    <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
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
     <IdeaInput />
     </div>

    </section>
  );
}

export default Hero;