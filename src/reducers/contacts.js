const GET_CONTACTS = 'contacts/GET_CONTACTS'

export const getContacts = (contacts) => {
    return {
        type: GET_CONTACTS,
        contacts,
    };
}


//GET CONTACTS
export const fetchContacts = () => async (dispatch) => {
    const res = await fetch('https://tester.crs-consulting.com/api/entries')
    const contacts = await res.json();
    dispatch(getContacts(contacts));
    return contacts;
};


const initialState = {};

const contactsReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_CONTACTS:
            action.contacts.map(contact => {
                return newState[contact.id] = contact
            })
            return newState
        default:
            return state
    }
}

export default contactsReducer
