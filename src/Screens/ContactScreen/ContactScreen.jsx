import React, { useContext } from 'react';
import { ContactContext } from '../../Context/ContactContext';
import ContactList from '../../Components/ContactList/ContactList';
import "../../assets/styles/ContactScreen.css";
import { FiCamera } from "react-icons/fi";
import { IoChatbubbleOutline, IoPeopleOutline, IoCallOutline, IoInformationCircleOutline, IoEllipsisVertical } from "react-icons/io5";

export default function ContactScreen() {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="contact-screen">
      <header className="header">
        <div className="header-icon" />
        <h1 className="title">WhatsApp</h1>
        <div className="header-actions">
          <FiCamera size={24} />
          <IoEllipsisVertical size={24} />
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="contact-list-wrapper">
        <ContactList contacts={contacts} />
      </div>

      <footer className="footer-nav">
        <div><IoChatbubbleOutline size={24} /><span>Chats</span></div>
        <div><IoInformationCircleOutline size={24} /><span>Novedades</span></div>
        <div><IoPeopleOutline size={24} /><span>Comunidades</span></div>
        <div><IoCallOutline size={24} /><span>Llamadas</span></div>
      </footer>
    </div>
  );
}
