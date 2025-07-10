import { createContext, useState } from "react";
import { getMessagesByContactId } from "../services/messagesService";

const defaultContext = {
  messages: [],
  isMessagesLoading: true,
  addNewMessage: () => {},
  deleteMessage: () => {},
  loadMessages: () => {},
};

export const MessagesContext = createContext(defaultContext);

const MessagesContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(true);

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const addNewMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      emisor: "Yo",
      texto: text,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "no-recibido",
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const loadMessages = (contactId) => {
    setIsMessagesLoading(true);
    setTimeout(() => {
      const data = getMessagesByContactId(contactId);
      setMessages(data);
      setIsMessagesLoading(false);
    }, 1000);
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessagesLoading,
        addNewMessage,
        deleteMessage,
        loadMessages,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;