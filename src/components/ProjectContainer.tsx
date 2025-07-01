interface ProjectContainerProps {
  children: React.ReactNode;
}

function ProjectContainer({ children }: ProjectContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {children}
    </div>
  );
}

export default ProjectContainer;
