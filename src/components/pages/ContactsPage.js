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
            <table>

                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                <div style={{ display: 'flex' }}>
                    <tr style={{ display: 'flex', flexDirection: 'column' }}>
                        {contacts.map((contact) => (
                            <td>{contact?.name}</td>
                        ))}
                    </tr>
                    <tr style={{ display: 'flex', flexDirection: 'column' }}>
                        {contacts.map((contact) => (
                            <td>{contact?.phone}</td>
                        ))}
                    </tr>
                    <tr style={{ display: 'flex', flexDirection: 'column' }}>
                        {contacts.map((contact) => (
                            <td>{contact?.email}</td>
                        ))}
                    </tr>
                </div>
                {/* {contacts.map((contact, i) => {
                    return (
                        <>
                            {(contact?.name || contact?.phone || contact?.email) && (
                                <div style={{ display: 'flex' }}>

                                    <tr>

                                        {contact?.name && (
                                            <td>
                                                <Link key={i} to={`/contacts/${contact?.id}`}>{contact?.name}</Link>
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
                })} */}
            </table>

            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>
        </>
    )
}

export default Contact
