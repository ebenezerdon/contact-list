import { useState } from 'react'
import useFetch from 'react-fetch-hook'
import config from '../../configJson'
import Tabs from './Tabs'
import './contactList.scss'

const ContactList = () => {
  const url = `${config.userUrl}/?results=${config.numberCards}`
  const { isLoading, data, error } = useFetch(url)
  const [contactData, setContactData] = useState(null)

  return (
    <div className="contactList">
      <Tabs data={data} setContactData={setContactData}/>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data...</div>}
      {contactData?.map(contact => (
        <div>{contact.name.last}</div>
      ))}
    </div>
  )
}

export default ContactList
