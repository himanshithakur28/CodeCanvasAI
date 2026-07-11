function Navbar(){
    return(
        <nav className="w-full flex justify-between items-center px-8 py-5 bg-slate-900 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">
            CodeCanvasAI
        </h1>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition">
        Get Started
      </button>

   </nav>
    );
}
export default Navbar;