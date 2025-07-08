import mock_data from "../data/contact_mock"


export const getMessagesByContactId = (contact_id) => {
    for(const contact of mock_data.contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact.messages
        }
    }

    return null
}