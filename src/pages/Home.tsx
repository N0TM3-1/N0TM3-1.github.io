function Home() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi! I'm <span className="text-cyan-600">Dumitru Copăceanu!</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300">
          I'm a teenager passionate about all things tech.
        </p>
        <button
          onClick={scrollToAbout}
          className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
        >
          Find out more about me
        </button>
      </div>
    </div>
  );
}
export default Home;
