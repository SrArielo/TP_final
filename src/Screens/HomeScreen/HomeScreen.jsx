import React, { useContext, useEffect } from 'react';
import Chat from '../../Components/Chat/Chat';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner';
import { useParams, useNavigate } from 'react-router-dom';
import { MessagesContext } from '../../Context/MessagesContext';
import { ContactContext } from '../../Context/ContactContext';
import Swal from 'sweetalert2';
import "../../App.css";
import "./HomeScreen.css";
import { FiCamera, FiSearch, FiMoreVertical, FiArrowLeft } from 'react-icons/fi';

export default function HomeScreen() {
  const { contact_id } = useParams();
  const navigate = useNavigate();
  const { loadMessages, isMessagesLoading } = useContext(MessagesContext);
  const { contacts } = useContext(ContactContext);

  useEffect(() => {
    if (contact_id) {
      loadMessages(contact_id);
    }
  }, [contact_id]);

  const contact = contacts.find(c => c.id === parseInt(contact_id));

  if (isMessagesLoading || !contact) {
    return <LoaderSpinner />;
  }

  return (
    <div className="app-container-1">
      <div className="chat-screen">

        <div className="chat-header">
          <div className="chat-header-left">
            <button className="back-button" onClick={() => navigate(-1)}>
              <FiArrowLeft size={24} />
            </button>
          </div>

          <div className="chat-header-center">
            <div className="chat-header-info">
              <img
                src={contact.img}
                alt={contact.name}
                className="chat-avatar"
                onClick={() => navigate(`/contacts/${contact.id}`)}
                style={{ cursor: 'pointer' }}
              />
              <div className="chat-contact-info">
                <h4>{contact.name}</h4>
                <small>Última conexión: {contact.last_time_connected}</small>
              </div>
            </div>
          </div>

          <div className="chat-header-right">
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

        {/* BODY */}
        <div className="chat-body">
          <Chat />
        </div>

        {/* FOOTER */}
        <div className="chat-footer">
          <NewMessageForm />
        </div>

      </div>
    </div>
  );
}