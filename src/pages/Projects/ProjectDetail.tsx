import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

interface ProjectData {
  id: number;
  [key: string]: any; // Add other properties as needed
}

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : 0;

  const [data, setData] = useState<ProjectData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = useMemo(() => {
    const supabaseUrl = "https://tachmiwlktzvnwsxngne.supabase.co";
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return createClient(supabaseUrl, supabaseKey);
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const { data: projectData, error } = await supabase
          .from("Project_Pages")
          .select()
          .eq("id", projectId);

        if (error) {
          setError(error.message);
        } else {
          setData(projectData);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    if (projectId > 0) {
      fetchProject();
    }
  }, [projectId, supabase]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data && data.length > 0 && (
        <div>
          {(() => {
            const project = data[0];
            return (
              <div>
                <h1 className="text-4xl text-center py-10">{project.title}</h1>
                <img src={project.image} className="mx-auto pb-5" />
                <p className="text-[20px] text-center mx-10">
                  {project.description}
                </p>
                <p className="text-[18px] text-center mx-10 py-5">
                  You can find it{" "}
                  <a href={project.link} className="text-cyan-500">
                    here
                  </a>
                </p>
              </div>
            );
          })()}
        </div>
      )}
    </>
  );
}

export default ProjectDetail;
