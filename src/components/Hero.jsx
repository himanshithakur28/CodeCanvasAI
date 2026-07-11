function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-slate-900">

      <h1 className="text-6xl font-extrabold text-white mb-6">
        Build Better Projects
      </h1>

      <p className="text-xl text-slate-400 max-w-2xl mb-8">
        Transform your software idea into a complete development blueprint
        powered by AI.
      </p>

      <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold transition">
        Generate Blueprint
      </button>

    </section>
  );
}

export default Hero;