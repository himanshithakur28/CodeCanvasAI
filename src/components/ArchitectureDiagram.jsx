import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
});

function ArchitectureDiagram({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    const renderChart = async () => {
      try {
        const id = `mermaid-${crypto.randomUUID()}`;
        console.log("Mermaid Chart:");
       console.log(chart);
    
        const { svg } = await mermaid.render(id, chart.trim());

        containerRef.current.innerHTML = svg;
      } catch (err) {
        console.error("Mermaid Error:", err);
      }
    };

    renderChart();
  }, [chart]);

  if (!chart) return null;

  return (
    <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
         Architecture Diagram
      </h2>

      <div
        ref={containerRef}
        className="overflow-x-auto flex justify-center"
      />

    </div>
  );
}

export default ArchitectureDiagram;