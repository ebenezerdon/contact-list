import { useState } from 'react'
import useFetch from 'react-fetch-hook'
import config from '../../configJson'
import Tabs from './Tabs'
import { ContactCard } from '../contactCard'
import { elipsisLoader } from '../../assets'
import './contactList.scss'

const ContactList = () => {
  const url = `${config.userUrl}/?results=${config.numberCards}`
  const { isLoading, data, error } = useFetch(url)
  const [contactData, setContactData] = useState(null)
  const [cardIsOpen, setCardIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState([])
  const [currentContactData, setCurrentContactData] = useState({})

  const handleListButtonClick = (event, contact) => {
    setMousePosition([event.clientX, event.clientY])
    setCurrentContactData(contact)
    setCardIsOpen(true)
  }

  const closeContactCard = ({target, currentTarget}) => {
    if (target === currentTarget) setCardIsOpen(false)
  }

  return (
    <div className="contactList" onClick={event => closeContactCard(event)}>
      <Tabs
        data={data}
        setContactData={setContactData}
        setCardIsOpen={setCardIsOpen}
      />
      {isLoading && <img className="contactList__loader" alt="loader" src={elipsisLoader} />}
      {error && <div>Error fetching data...</div>}
      {cardIsOpen && (
        <ContactCard
          mousePosition={mousePosition}
          contact={currentContactData}
          setCardIsOpen={setCardIsOpen}
        />
      )}
      <div className="contactList__content">
        {contactData?.map((contact, index) => (
          <button
            onClick={(event) => handleListButtonClick(event, contact)}
            key={index} className="contactList__content__name"
          >
            {contact.name.last}, {contact.name.first.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ContactList
