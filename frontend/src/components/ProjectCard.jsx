const ProjectCard = ({ project }) => {
  return (
    <article className="card project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Status: {project.fundingStatus}</p>
    </article>
  );
};

export default ProjectCard;
