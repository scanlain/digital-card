import contacts  from "../data/contacts"
import ContactRow from "./ContactRow"

const MainContent = () => {

  return (
    <div className="main">
        {contacts.map((contact) => (
            <div>
                <ContactRow key={contact.label} {...contact} />
            </div>
        ))}
    </div>
  )
}

export default MainContent