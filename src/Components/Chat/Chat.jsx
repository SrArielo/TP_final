import React, { useContext, useEffect, useRef } from 'react';
import Message from '../Message/Message';
import { MessagesContext } from '../../Context/MessagesContext';
import "../../assets/styles/Chat.css"; 

export default function Chat() {
  const { messages } = useContext(MessagesContext);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="chat-container chat-no-messages">
        <span>No hay mensajes aún</span>
      </div>
    );
  }

  return (
    <div className="chat-container">
      {messages.map((message) => (
        <Message
          key={message.id}
          emisor={message.emisor}
          id={message.id}
          hora={message.hora}
          texto={message.texto}
          status={message.status}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}