import { useState, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  [key: string]: any;
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
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = useMemo(() => {
    const supabaseUrl = "https://tachmiwlktzvnwsxngne.supabase.co";
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return createClient(supabaseUrl, supabaseKey);
  }, []);

  const fetchProjectDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Project_Pages")
        .select()
        .eq("id", id);

      if (error) {
        setError(error.message);
      } else if (data && data.length > 0) {
        setProjectData(data[0]);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    setShowModal(true);
    fetchProjectDetails();
  };

  const closeModal = () => {
    setShowModal(false);
    setProjectData(null);
    setError(null);
  };

  return (
    <>
      <div
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 cursor-pointer transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
        onClick={handleCardClick}
      >
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-white">
          {title}
        </h2>
        <p className="text-gray-300 text-center mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-end">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              status
                ? "text-green-400 bg-green-400/10"
                : "text-yellow-400 bg-yellow-400/10"
            }`}
          >
            {status ? "✓ Complete" : "⏳ In Progress"}
          </span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {projectData?.title || title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-3xl transition-colors"
                >
                  ×
                </button>
              </div>

              {loading && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
                  <p className="mt-4 text-gray-300">
                    Loading project details...
                  </p>
                </div>
              )}

              {error && (
                <div className="text-red-400 text-center py-8 bg-red-400/10 rounded-lg">
                  <p className="font-medium">Error loading project details</p>
                  <p className="text-sm mt-2">{error}</p>
                </div>
              )}

              {projectData && !loading && (
                <div className="space-y-6">
                  {projectData.image && (
                    <div className="text-center">
                      <img
                        src={projectData.image}
                        alt={projectData.title}
                        className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {projectData.description || description}
                    </p>
                  </div>
                  {projectData.link && (
                    <div className="text-center">
                      <a
                        href={projectData.link}
                        className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {!projectData && !loading && !error && (
                <div className="text-center py-8">
                  <p className="text-lg text-gray-300 mb-4">{description}</p>
                  <p className="text-gray-500">
                    No additional details available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
