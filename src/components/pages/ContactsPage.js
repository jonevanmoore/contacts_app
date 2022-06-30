import { fetchContacts, newContact } from "../../reducers/contacts"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OneContact from "./OneContact"

import AddIcon from '@material-ui/icons/Add';

const Contact = () => {
    const dispatch = useDispatch()
    const contacts = Object.values(useSelector(state => state.contacts)).reverse()

    //NEW CONTACT
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const [contactDisplay, setContactDisplay] = useState('block')
    const [editDisplay, setEditDisplay] = useState('none')

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
        <div style={{ paddingRight: '20%', paddingLeft: '20%' }}>
            <h1>Contacts</h1>


            <div style={{ display: `${contactDisplay}` }}>
                <button onClick={changeDisplay} className='add-con-btn'>Add New Contact <AddIcon style={{ fontSize: 'small' }} className='icon-style' /></button>
            </div>
            <div style={{ display: `${editDisplay}` }}>

                <input
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    placeholder='Name'
                    maxLength={100}
                    className='new-input'
                >
                </input>
                <input
                    value={newPhone}
                    onChange={e => setNewPhone(e.target.value)}
                    placeholder='Phone Number'
                    maxLength={30}
                    className='new-input'
                >
                </input>
                <input
                    value={newEmail}
                    onChange={e => setNewEmail(e.target.value)}
                    placeholder='Email Address'
                    maxLength={100}
                    className='new-input'
                >
                </input>
                <AddIcon onClick={createNewContact} className='add-con-icon' />
                <button onClick={changeDisplay} className='add-con-btn'>Cancel</button>

            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <span>Name</span>
                        <span>Phone</span>
                        <span>Email</span>
                    </div> */}
            {contacts.map(contact => (
                <OneContact contact={contact} key={contact?.id} />
            ))}
        </div>
    )
}

export default Contact
