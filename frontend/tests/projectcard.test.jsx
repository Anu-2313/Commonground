import { render, screen } from '@testing-library/react';
import ProjectCard from '../src/components/ProjectCard.jsx';

describe('ProjectCard', () => {
  it('shows project details', () => {
    const project = {
      title: 'Community Lab',
      description: 'Open workspace for makers.',
      fundingStatus: 'seeking'
    };

    render(<ProjectCard project={project} />);

    expect(screen.getByText('Community Lab')).toBeInTheDocument();
    expect(screen.getByText('Open workspace for makers.')).toBeInTheDocument();
    expect(screen.getByText('Status: seeking')).toBeInTheDocument();
  });
});
