import Notifications from '../components/Notifications.jsx';
import UserProfile from '../components/UserProfile.jsx';

const Dashboard = () => {
  const user = {
    name: 'Alex Doe',
    role: 'doer',
    bio: 'Working on community-driven build projects.'
  };

  const notices = [
    { id: 1, message: '2 new investor matches this week.' },
    { id: 2, message: 'Remember to update your milestones.' }
  ];

  return (
    <section>
      <h2>Dashboard</h2>
      <UserProfile user={user} />
      <Notifications notices={notices} />
    </section>
  );
};

export default Dashboard;
