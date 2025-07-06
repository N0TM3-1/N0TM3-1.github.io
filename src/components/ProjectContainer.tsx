interface ProjectContainerProps {
  children: React.ReactNode;
}

function ProjectContainer({ children }: ProjectContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

export default ProjectContainer;
