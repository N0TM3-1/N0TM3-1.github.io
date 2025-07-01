import Academics from "../components/AcademicHistory";

function TestPage() {
  return (
    <>
      <h1 className="text-gray-400 text-4xl">Elevated</h1>
      <h1 className="text-cyan-600 text-4xl">Accent</h1>
      <h1 className="text-gray-500 text-3xl">Subtitle</h1>
      <Academics langs={["C++", "Lua", "Python", "JavaScript", "SQL"]} />
    </>
  );
}
export default TestPage;
