const timelineData = [
  {
    title: "Primary School no. 82 (Chișinău)",
    date: "2016 - 2019",
    description: "Grades 1-4",
  },
  {
    title: '"Petru Zadnipru" Lyceum (Chișinău)',
    date: "2019-2024",
    description: "Grades 5-9",
  },
  {
    title: '"Timotei Cipariu" Lyceum (Bucharest)',
    date: "2024 - Present",
    description:
      "Currently enrolled in the 10th grade, specializing in Mathematics-Computer Science.",
  },
];

function AcademicHistory() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Academic History
        </h1>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timelineData.map((event, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {event.title}
                </h3>
                <time className="block mb-3 text-sm text-cyan-300 font-medium">
                  {event.date}
                </time>
                <p className="text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative mx-auto w-full max-w-4xl">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 transform -translate-x-1/2"></div>

          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`relative mb-16 flex w-full items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Content Box */}
              <div className="w-5/12 px-4">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {event.title}
                  </h3>
                  <time className="block mb-3 text-sm text-cyan-300 font-medium">
                    {event.date}
                  </time>
                  <p className="text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Dot in center of card aligned on the timeline */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-800 shadow-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicHistory;
