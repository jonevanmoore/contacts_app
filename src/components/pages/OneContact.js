import { useParams } from "react-router-dom"

const OneContact = () => {
    const { contactId } = useParams()

    return (
        <h1>ONE CONTACT</h1>
    )
}

export default OneContact
