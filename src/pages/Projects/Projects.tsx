import ProjectContainer from "../../components/ProjectContainer";
import ProjectCard from "../../components/ProjectCard";
import { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  status: boolean;
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl =
    "https://tachmiwlktzvnwsxngne.supabase.co/rest/v1/Projects?select=*";
  const apiKey = process.env.SUPABASE_ANON_KEY;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            apikey: apiKey || "", // fallback to empty string to avoid undefined
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Fallback data (your existing projects array)
  const fallbackProjects = [
    {
      id: 1,
      title: "Little James' Birthday Blow",
      description: "A tiny game about blowing balloons",
      status: true,
    },
  ];

  const projectsToDisplay = projects.length > 0 ? projects : fallbackProjects;

  if (loading) {
    return <div className="text-center pt-10">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center pt-10 text-red-500">Error: {error}</div>;
  }

  const projectCards = projectsToDisplay.map((project, index) => (
    <ProjectCard
      key={index}
      id={project.id}
      title={project.title}
      description={project.description}
      status={project.status}
    />
  ));

  return (
    <>
      <h1 className="text-4xl text-center pb-10 pt-10">My projects</h1>
      <ProjectContainer>{projectCards}</ProjectContainer>
    </>
  );
}

export default Projects;
