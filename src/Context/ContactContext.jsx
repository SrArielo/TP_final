import { createContext, useState, useEffect } from "react";
import { getContactList } from "../services/contactService";

export const ContactContext = createContext({
  contacts: [],
  isLoadingContacts: true,
});

const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoadingContacts, setIsLoadingContacts] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const contact_list = getContactList();
      setContacts(contact_list);
      setIsLoadingContacts(false);
    }, 1000);
  }, []); 

  return (
    <ContactContext.Provider
      value={{
        contacts,
        isLoadingContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;