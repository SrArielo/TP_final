import mock_data from "../data/contact_mock"


export const getContactList = () => {
    return mock_data.contacts
}

export const getContactById = (contact_id) => {
    for(const contact of mock_data.contacts){
        if(Number(contact.id) === Number(contact_id) ){
            return contact
        }
    }
    return null
}