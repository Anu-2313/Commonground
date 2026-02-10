import ChatBox from '../components/ChatBox.jsx';

const Chat = () => {
  const messages = [
    { id: 1, sender: 'Jamie', text: 'Excited to discuss milestones.' },
    { id: 2, sender: 'Alex', text: 'Let’s set up our first check-in.' }
  ];

  return (
    <section>
      <h2>Messages</h2>
      <ChatBox messages={messages} />
    </section>
  );
};

export default Chat;
