const Notifications = ({ notices }) => {
  return (
    <aside className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id}>{notice.message}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Notifications;
