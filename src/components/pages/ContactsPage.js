import { fetchContacts, newContact } from "../../reducers/contacts"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OneContact from "./OneContact"
import './ContactsPage.css'

import AddIcon from '@material-ui/icons/Add';

const Contact = () => {
    const dispatch = useDispatch()
    const contacts = Object.values(useSelector(state => state.contacts))

    //NEW CONTACT
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const createNewContact = async () => {
        await dispatch(newContact({ name: newName, phone: newPhone, email: newEmail }))
        setNewName('')
        setNewEmail('')
        setNewPhone('')
        window.location.reload(true);
    }

    return (
        <>
            <h1>Contacts</h1>
            <div>
                <span>Name</span>
                <span>Phone</span>
                <span>Email</span>
            </div>
            {contacts.map(contact => (
                <OneContact contact={contact} key={contact?.id} />
            ))}
            <div>
                <input
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    placeholder='Name*'
                    required={true}
                >
                </input>
                <input
                    value={newPhone}
                    onChange={e => setNewPhone(e.target.value)}
                    placeholder='Phone Number'
                >
                </input>
                <input
                    value={newEmail}
                    onChange={e => setNewEmail(e.target.value)}
                    placeholder='Email Address'
                >
                </input>
                <button onClick={createNewContact}>CREATE</button>
                <AddIcon onClick={createNewContact} />

            </div>
        </>
    )
}

export default Contact
