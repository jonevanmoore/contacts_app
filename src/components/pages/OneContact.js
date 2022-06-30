import { useDispatch } from "react-redux"
import { useState } from "react"
import { destroyContact, updateContact } from "../../reducers/contacts";

// import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from "@material-ui/icons";

const OneContact = ({ contact }) => {
    const dispatch = useDispatch()

    //EXISTING CONTACT
    const id = contact?.id
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
            setName(contact?.name)
            setPhone(contact?.phone)
            setEmail(contact?.email)
        }
        if (setEditDisplay === 'block') {
            setEditDisplay('none')
            setContactDisplay('block')
            setName(contact?.name)
            setPhone(contact?.phone)
            setEmail(contact?.email)
        } else if (editDisplay === 'none') {
            setEditDisplay('block')
            setContactDisplay('none')
        }
    }

    const updateOneContact = async () => {
        await dispatch(updateContact({ id, name, phone, email }))
        // window.location.reload(true);
    }

    return (
        <>
            <div style={{ display: 'flex', border: '1px white solid', borderRadius: '10px', marginBottom: '20px', padding: '20px' }} key={id}>
                <div style={{ display: `${contactDisplay}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px', marginBottom: '10px', float: 'left' }}>
                            <span style={{ fontSize: 'small' }}>Name</span>
                            {contact?.name && (
                                <span style={{ color: 'black' }}>{contact?.name}</span>
                            )}
                            {!contact?.name && (
                                <span key={contact?.id} style={{ color: 'black' }}>n/a</span>
                            )}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px', marginBottom: '10px' }}>
                            <span style={{ fontSize: 'small' }}>Phone</span>
                            {contact?.phone && (
                                <span style={{ color: 'black' }}>{contact?.phone}</span>
                            )}
                            {!contact?.phone && (
                                <span style={{ color: 'black' }}>n/a</span>
                            )}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px', float: 'right', marginBottom: '10px' }}>
                            <span style={{ fontSize: 'small' }}>Email</span>
                            {contact?.email && (
                                <span style={{ color: 'black' }}>{contact?.email}</span>
                            )}
                            {!contact?.email && (
                                <span style={{ color: 'black' }}>n/a</span>
                            )}
                        </div>

                        <div>
                            <Delete onClick={() => deleteOneContact(contact?.id)} className='icon-style delete-icon' />
                            <Edit onClick={changeDisplay} className='icon-style edit-icon' />
                        </div>
                    </div>
                </div>

                <div style={{ display: `${editDisplay}` }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='Name'
                            maxLength={100}
                        ></input>
                        <input
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder='Phone'
                            maxLength={30}
                        ></input>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Email'
                            maxLength={100}
                        ></input>
                        <button onClick={updateOneContact} className='add-con-btn' style={{ float: 'left' }}>Update</button>
                        <button onClick={changeDisplay} className='add-con-btn'>Cancel</button>
                    </div>
                </div>
                {/* <button onClick={changeDisplay}>EDIT</button> */}

            </div>
        </>

    )
}

export default OneContact
