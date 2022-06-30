import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchOneContact } from "../../reducers/contacts"

const OneContact = () => {
    const { contactId } = useParams()
    const dispatch = useDispatch()

    const contact = useSelector(state => state.contacts[contactId])
    console.log(contact)

    useEffect(() => {
        dispatch(fetchOneContact(contactId))
    }, [dispatch])

    return (
        <h1>{contact?.name}</h1>
    )
}

export default OneContact
