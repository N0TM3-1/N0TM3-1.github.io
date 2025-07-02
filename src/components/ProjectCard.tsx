import { Link } from "react-router-dom";

function test(id: number) {
  console.log("Card number " + id + " clicked");
}

function ProjectCard({
  id,
  title,
  description,
  status,
}: {
  id: number;
  title: string;
  description: string;
  status: boolean;
}) {
  return (
    <Link to={`/projects/${id}`} className="no-underline">
      <div
        className="bg-gray-900 m-5 py-2 rounded-xl hover:bg-gray-800"
        onClick={() => test(id)}
      >
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-gray-400 text-center p-1.5 mx-2">{description}</p>
        <p
          className={`text-right px-4 ${
            status ? "text-green-400" : "text-yellow-400"
          }`}
        >
          {status ? "✓ Complete" : "⏳ In Progress"}
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
