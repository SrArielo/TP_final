import React, { useContext, useEffect } from 'react';
import Chat from '../../Components/Chat/Chat';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner';
import { useParams, Link } from 'react-router-dom';
import { MessagesContext } from '../../Context/MessagesContext';
import { ContactContext } from '../../Context/ContactContext';
import Swal from 'sweetalert2';
import "../../assets/styles/App.css";
import "../../assets/styles/HomeScreen.css";
import { BsEmojiSmile } from 'react-icons/bs';
import { FiCamera, FiSearch, FiMoreVertical } from 'react-icons/fi';

export default function HomeScreen() {
  const { contact_id } = useParams();
  const { loadMessages, isMessagesLoading } = useContext(MessagesContext);
  const { contacts } = useContext(ContactContext);

  const contact = contacts.find(c => c.id === parseInt(contact_id));

  useEffect(() => {
    loadMessages(contact_id);
  }, [contact_id]);

  const handleClickAlertButton = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
  };

  if (isMessagesLoading || !contact) {
    return <LoaderSpinner />;
  }

  return (
    <div className="app-container">
      <div className="chat-screen">
        <div className="chat-header">
          <Link to={`/contacts/${contact_id}/detail`}>
            <img src={contact.img} alt={contact.name} className="chat-avatar" />
          </Link>
          <div className="chat-contact-info">
            <h4>{contact.name}</h4>
            <small>Última conexión: {contact.last_time_connected}</small>
          </div>

          <div className="chat-header-buttons">

            <button className="icon-button" title="Videollamada">
              <FiCamera size={20} />
            </button>

            <button className="icon-button" title="Buscar en conversación">
              <FiSearch size={20} />
            </button>

            <button className="icon-button" title="Más opciones">
              <FiMoreVertical size={20} />
            </button>

          </div>
        </div>

        <div className="chat-body">
          <Chat />
        </div>

        <div className="chat-footer">
          <NewMessageForm />
        </div>
      </div>
    </div>
  );
}