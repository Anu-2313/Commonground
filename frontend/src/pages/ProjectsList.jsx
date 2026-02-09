import ProjectCard from '../components/ProjectCard.jsx';

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      title: 'Neighborhood Garden Network',
      description: 'Building shared tools for local gardens.',
      fundingStatus: 'seeking'
    },
    {
      id: 2,
      title: 'Open Source Transit Tracker',
      description: 'Real-time updates for underserved routes.',
      fundingStatus: 'funded'
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsList;
