import ProjectContainer from "../../components/ProjectContainer";
import ProjectCard from "../../components/ProjectCard";
import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

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

  const supabase = useMemo(() => {
    const supabaseUrl = "https://tachmiwlktzvnwsxngne.supabase.co";
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    console.log("Environment check:", {
      hasKey: !!supabaseKey,
      keyLength: supabaseKey?.length,
      keyStart: supabaseKey?.substring(0, 20) + "...",
    });

    if (!supabaseKey) {
      console.warn(
        "VITE_SUPABASE_ANON_KEY is not defined - using fallback projects"
      );
      return null;
    }

    return createClient(supabaseUrl, supabaseKey);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log("Starting to fetch projects...");

      // If no Supabase key, use fallback projects immediately
      if (!supabase) {
        console.log("No Supabase client, using fallback projects");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching from Supabase...");
        const { data, error } = await supabase.from("Projects").select("*");

        console.log("Supabase response:", {
          hasData: !!data,
          dataLength: data?.length,
          error: error?.message,
        });

        if (error) {
          console.error("Supabase error:", error);
          setError(error.message);
        } else {
          console.log("Projects loaded successfully:", data);
          setProjects(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [supabase]);

  const fallbackProjects = [
    {
      id: 1,
      title: "Little James' Birthday Blow",
      description: "A tiny game about blowing balloons",
      status: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "This personal portfolio built with React and TypeScript",
      status: true,
    },
    {
      id: 3,
      title: "Future Project",
      description: "An exciting project currently in development",
      status: false,
    },
  ];

  const projectsToDisplay = projects.length > 0 ? projects : fallbackProjects;

  console.log("Component render state:", {
    loading,
    error,
    projectsCount: projectsToDisplay.length,
    usingFallback: projects.length === 0,
  });

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
        <p className="mt-4 text-gray-300">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-400 font-medium">Error loading projects</p>
          <p className="text-sm text-gray-400 mt-2">{error}</p>
          <p className="text-sm text-gray-400 mt-2">
            Showing fallback projects instead.
          </p>
        </div>
        <div className="mt-8">
          <ProjectContainer>
            {fallbackProjects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
              />
            ))}
          </ProjectContainer>
        </div>
      </div>
    );
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
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        My Projects
      </h1>
      <ProjectContainer>{projectCards}</ProjectContainer>
    </div>
  );
}

export default Projects;
