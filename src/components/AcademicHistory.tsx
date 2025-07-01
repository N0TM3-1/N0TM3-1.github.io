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
    <>
      <h1 className="text-3xl font-bold text-center pt-10">Academic History</h1>
      <div className="relative mx-auto w-full max-w-4xl mt-10 mb-25">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`relative mb-16 flex w-full items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Content Box */}
            <div className="w-1/2 px-4">
              <div className="relative shadow-md rounded-lg p-4 border border-gray-200">
                <h3 className="text-xl font-semibold text-cyan-600">
                  {event.title}
                </h3>
                <time className="block mb-2 text-sm text-gray-400">
                  {event.date}
                </time>
                <p className="text-base text-gray-500">{event.description}</p>
              </div>
            </div>

            {/* Dot in center of card aligned on the timeline */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AcademicHistory;
