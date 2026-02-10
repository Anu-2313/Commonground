const ChatBox = ({ messages }) => {
  return (
    <section className="chat-box">
      <h2>Conversation</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChatBox;
