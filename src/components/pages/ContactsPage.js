import { fetchContacts } from "../../reducers/contacts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './ContactsPage.css'

const Contact = () => {
    const dispatch = useDispatch()

    const contacts = Object.values(useSelector(state => state.contacts))

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <>
            <h1>Contacts</h1>


            <div>
                <span>Name</span>
                <span>Phone</span>
                <span>Email</span>
            </div>
            {contacts.map((contact, i) => {
                return (
                    <>
                        {(contact?.name || contact?.phone || contact?.email) && (
                            <div style={{ display: 'flex' }}>

                                <tr>

                                    {contact?.name && (
                                        <td>
                                            <Link key={contact?.id} to={`/contacts/${contact?.id}`} className='contact_link'>{contact?.name}</Link>
                                        </td>
                                    )}
                                    {!contact?.name && (
                                        <td>
                                            <span>Add name</span>
                                        </td>
                                    )}
                                </tr>

                                <tr>

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
                                </tr>

                                <tr>

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
                                </tr>

                            </div>
                        )}
                    </>
                )
            })}


        </>
    )
}

export default Contact
