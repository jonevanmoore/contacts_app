import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { destroyContact, newContact } from "../../reducers/contacts"

const OneContact = ({ contact }) => {
    const dispatch = useDispatch()

    //EXISTING CONTACT
    const [name, setName] = useState(contact?.name)
    const [phone, setPhone] = useState(contact?.phone)
    const [email, setEmail] = useState(contact?.email)

    const [contactDisplay, setContactDisplay] = useState('block')
    const [editDisplay, setEditDisplay] = useState('none')

    const deleteOneContact = async (contactId) => {
        await dispatch(destroyContact(contactId))
        window.location.reload(true);
    }

    const changeDisplay = () => {
        if (contactDisplay === 'block') {
            setContactDisplay('none')
            setEditDisplay('block')
        } else if (contactDisplay === 'none') {
            setContactDisplay('block')
            setEditDisplay('none')
        }
        if (setEditDisplay === 'block') {
            setEditDisplay('none')
            setContactDisplay('block')
        } else if (editDisplay === 'none') {
            setEditDisplay('block')
            setContactDisplay('none')
        }
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: `${contactDisplay}` }}>

                    {contact?.name && (
                        <span to={`/contacts/${contact?.id}`} className='contact_link'>{contact?.name}</span>
                    )}
                    {!contact?.name && (
                        <span key={contact?.id}>Add name</span>
                    )}



                    {contact?.phone && (
                        <span>{contact?.phone}</span>
                    )}
                    {!contact?.phone && (
                        <span>Add Phone Number</span>
                    )}



                    {contact?.email && (
                        <span>{contact?.email}</span>
                    )}
                    {!contact?.email && (
                        <span>Add Email Address</span>

                    )}
                </div>
                <div style={{ display: `${editDisplay}` }}>

                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    ></input>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>

                <button onClick={() => deleteOneContact(contact?.id)}>DELETE CONTACT</button>
                <button onClick={changeDisplay}>EDIT</button>

            </div>
        </>

    )
}

export default OneContact
