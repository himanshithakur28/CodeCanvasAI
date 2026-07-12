function LoadingScreen() {
  return (
    <div className="mt-8 w-full rounded-2xl bg-slate-900 border border-slate-700 p-10 shadow-xl animate-fadeIn">

      <h2 className="text-3xl font-bold text-cyan-400 mb-2">
        Building your software blueprint
      </h2>

      <p className="text-slate-400 mb-8">
        This usually takes only a few seconds...
      </p>

      <div className="space-y-6">

        <LoadingItem text="Analyzing project requirements" />
        <LoadingItem text="Selecting technology stack" />
        <LoadingItem text="Designing database schema" />
        <LoadingItem text="Planning architecture" />
        <LoadingItem text="Generating implementation roadmap" />

      </div>

    </div>
  );
}

function LoadingItem({ text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

      <div className="flex-1">

        <p className="text-slate-300 mb-2">
          {text}
        </p>

        <div className="h-2 rounded bg-slate-700 overflow-hidden">

          <div className="h-full w-1/2 bg-cyan-500 animate-pulse rounded"></div>

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;