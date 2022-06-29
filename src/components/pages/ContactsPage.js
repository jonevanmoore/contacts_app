import { fetchContacts } from "../../reducers/contacts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import OneContact from "./OneContact"

const Contact = () => {
    const dispatch = useDispatch()

    const contacts = Object.values(useSelector(state => state.contacts))

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <>
            <h1>Contacts</h1>
            {contacts.map((contact, i) => {
                return (
                    <>
                        <div style={{ display: 'flex' }}>
                            <div className="name-div" style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>Name</span>
                                {contact?.name && (
                                    <Link key={i} to={`/contacts/${contact?.id}`}>{contact?.name}</Link>
                                )}
                                {!contact?.name && (
                                    <span>Add name</span>
                                )}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>Phone</span>
                                <span>{contact?.phone}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>Email</span>
                                <span>{contact?.email}</span>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Contact
