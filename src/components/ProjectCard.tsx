function test(id: number) {
  console.log("Card number " + (id + 1) + " clicked");
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
    <div onClick={() => test(id)}>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-gray-400 text-center">{description}</p>
      <p className="text-gray-500 text-right">{status}</p>
    </div>
  );
}

export default ProjectCard;
