const GET_CONTACTS = 'contacts/GET_CONTACTS'
const GET_CONTACT = 'contacts/GET_CONTACT'
const CREATE_CONTACT = 'contacts/CREATE_CONTACT'
const DELETE_CONTACT = 'contact/DELETE_CONTECT'

export const getContacts = (contacts) => {
    return {
        type: GET_CONTACTS,
        contacts,
    };
}

export const getContact = (contact) => {
    return {
        type: GET_CONTACT,
        contact
    }
}

export const createContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        contact
    }
}

export const deleteContact = (contactId) => {
    return {
        type: DELETE_CONTACT,
        contactId
    }
}


//GET CONTACTS
export const fetchContacts = () => async (dispatch) => {
    const res = await fetch('https://tester.crs-consulting.com/api/entries');
    const contacts = await res.json();
    dispatch(getContacts(contacts));
    return contacts;
};

//ONE CONTACT
export const fetchOneContact = (contactId) => async (dispatch) => {
    const res = await fetch(`https://tester.crs-consulting.com/api/entry?id=${contactId}`);
    const contact = await res.json();
    dispatch(getContact(contact));
    return contact;
}

//CREATE CONTACT
export const newContact = (contact) => async (dispatch) => {
    const res = await fetch('https://tester.crs-consulting.com/api/entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    });

    const newContact = await res.json();

    if (res.ok) {
        await dispatch(createContact(newContact));
        return newContact;
    } else {
        console.log(newContact.errors);
    }
}

//DELETE CONTACT
export const destroyContact = (contactId) => async (dispatch) => {
    const res = await fetch(`https://tester.crs-consulting.com/api/entry?id=${contactId}`, {
        method: 'DELETE'
    })

    const deletedContact = await res.json();
    await dispatch(deleteContact(deletedContact))

}

const initialState = {};

const contactsReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_CONTACTS:
            action.contacts.map(contact => {
                return newState[contact.id] = contact
            })
            return newState
        case GET_CONTACT:
            newState[action.contact.id] = action.contact;
            return newState;
        case CREATE_CONTACT:
            newState[action.contact.id] = action.contact;
            return newState;
        case DELETE_CONTACT:
            delete newState[action.contactId]
            return newState
        default:
            return state
    }
}

export default contactsReducer
