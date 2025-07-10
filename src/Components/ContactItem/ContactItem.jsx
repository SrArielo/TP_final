import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";

const ContactItem = ({ name, id, last_time_connected, img, last_message, unread_messages }) => {
    return (
        <Link to={`/contacts/${id}/messages`} className="contact-item">
            <img src={img} alt={`${name} profile`} className="contact-avatar" />
            
            <div className="contact-details">
                <div className="contact-header">
                    <span className="contact-name">{name}</span>
                    <span className="contact-time">{last_time_connected}</span>
                </div>

                <div className="contact-message">
                    {last_message?.text}
                </div>
            </div>

            {unread_messages > 0 && (
                <span className="unread-badge">{unread_messages}</span>
            )}
        </Link>
    );
};

export default ContactItem;