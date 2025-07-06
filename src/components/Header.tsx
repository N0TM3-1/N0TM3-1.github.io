function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm flex justify-between items-center px-4 py-2 sticky top-0 z-50">
      <div className="">
        <button 
          onClick={() => scrollToSection("home")}
          className="text-white opacity-100 hover:text-cyan-400 transition-colors cursor-pointer"
          aria-label="Go to home section"
        >
          <strong>Dumitru Copăceanu</strong>
        </button>
      </div>
      <nav className="flex justify-between items-center px-4 py-2">
        <button 
          onClick={() => scrollToSection("home")}
          className="px-5 text-gray-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Go to home section"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection("about")}
          className="px-5 text-gray-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Go to about section"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          className="px-5 text-gray-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Go to projects section"
        >
          Projects
        </button>
      </nav>
    </div>
  );
}

export default Header;
