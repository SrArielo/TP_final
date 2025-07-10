import { useContext, useEffect, useRef } from 'react';
import Message from '../Message/Message';
import { MessagesContext } from '../../Context/MessagesContext';
import './Chat.css';

export default function Chat() {
  const { messages } = useContext(MessagesContext);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!messages || messages.length === 0) {
    return (
      <div className="chat-container chat-no-messages">
        <span>No hay mensajes aún</span>
      </div>
    );
  }

  return (
    <div className="chat-container">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}