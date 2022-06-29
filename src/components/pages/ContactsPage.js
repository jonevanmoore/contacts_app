import { fetchContacts } from "../../reducers/contacts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Contact = () => {
    const dispatch = useDispatch()

    const contacts = Object.values(useSelector(state => state.contacts))

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <>
            <h1>HELLO</h1>
            {contacts.map((contact, i) => {
                return (
                    <span key={i}>{contact?.name}</span>
                )
            })}
        </>
    )
}

export default Contact
