function AboutSection() {
  const programmingLanguages = [
    { name: "C++", icon: "⚡", color: "text-blue-400" },
    { name: "Python", icon: "🐍", color: "text-yellow-400" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-300" },
    { name: "Lua", icon: "🔵", color: "text-blue-300" },
    { name: "SQL", icon: "🗄️", color: "text-cyan-400" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h1>
        <div className="bg-gray-800/50 rounded-lg p-8 md:p-12 backdrop-blur-sm border border-gray-700">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center mb-8">
            I am a software developer with a passion for creating games and
            backend applications. I love exploring new technologies and building
            projects that challenge my skills. My journey in software
            development has been a blend of learning, experimenting, and
            creating.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
              Programming Languages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {programmingLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full border border-gray-600 hover:border-cyan-500 transition-colors"
                >
                  <span className="text-xl">{lang.icon}</span>
                  <span className={`font-medium ${lang.color}`}>
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
