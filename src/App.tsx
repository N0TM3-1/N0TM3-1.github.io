import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
