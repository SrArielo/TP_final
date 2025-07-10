import mock_data from "../data/contact_mock";

export const getContactList = () => mock_data.contacts;

export const getContactById = (contact_id) => {
  const id = Number(contact_id);
  return mock_data.contacts.find(contact => Number(contact.id) === id) || null;
};