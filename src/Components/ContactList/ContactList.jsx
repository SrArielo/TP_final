import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const ContactsList = ({ contacts, isLoadingContacts }) => {
    if (isLoadingContacts) {
        return <LoaderSpinner />;
    }

    return (
        <div>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    last_time_connected={contact.last_time_connected}
                    img={contact.img}
                    last_message={contact.last_message}
                    unread_messages={contact.unread_messages}
                />
            ))}
        </div>
    );
};

export default ContactsList;