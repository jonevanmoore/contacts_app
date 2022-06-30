import { fetchContacts, newContact, destroyContact } from "../../reducers/contacts"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './ContactsPage.css'

const Contact = () => {
    const dispatch = useDispatch()
    const contacts = Object.values(useSelector(state => state.contacts))

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
    }

    const deleteContact = async (contactId) => {
        await dispatch(destroyContact(contactId))
    }

    return (
        <>
            <h1>Contacts</h1>
            <div>
                <span>Name</span>
                <span>Phone</span>
                <span>Email</span>
            </div>
            {contacts.map((contact, i) => {
                const contactId = contact?.id
                return (
                    <>
                        {(contact?.name || contact?.phone || contact?.email) && (
                            <div style={{ display: 'flex' }}>
                                {contact?.name && (
                                    <td>
                                        <Link key={contactId} to={`/contacts/${contactId}`} className='contact_link'>{contact?.name}</Link>
                                    </td>
                                )}
                                {!contact?.name && (
                                    <td>
                                        <span>Add name</span>
                                    </td>
                                )}



                                {contact?.phone && (
                                    <td>
                                        <span>{contact?.phone}</span>
                                    </td>
                                )}
                                {!contact?.phone && (
                                    <td>
                                        <span>Add Phone Number</span>
                                    </td>
                                )}



                                {contact?.email && (
                                    <td>
                                        <span>{contact?.email}</span>
                                    </td>
                                )}
                                {!contact?.email && (
                                    <td>
                                        <span>Add Email Address</span>
                                    </td>
                                )}


                                {/* <button onClick={deleteContact(contact?.id)}>DELETE CONTACT</button> */}
                            </div>
                        )}
                    </>
                )
            })}
            <div>
                <form onSubmit={createNewContact}>

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
                    <button>CREATE</button>
                </form>
            </div>
        </>
    )
}

export default Contact
