const UserProfile = ({ user }) => {
  return (
    <section className="user-profile">
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>{user.bio}</p>
    </section>
  );
};

export default UserProfile;
