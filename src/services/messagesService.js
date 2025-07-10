import mock_data from "../data/contact_mock";

export const getMessagesByContactId = (contact_id) => {
  const id = Number(contact_id);
  const contact = mock_data.contacts.find(c => Number(c.id) === id);
  return contact ? contact.messages : null;
};