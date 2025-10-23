import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        return <ProjectLayout {...project} key={index} />;
      })}
    </div>
  );
};
export default ProjectList;
