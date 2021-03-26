import { useState } from 'react'
import useFetch from 'react-fetch-hook'
import config from '../../configJson'
import Tabs from './Tabs'
import './contactList.scss'

const ContactList = () => {
  const url = `${config.userUrl}/?results=${config.numberCards}`
  const { isLoading, data, error } = useFetch(url)
  const [contactData, setContactData] = useState(null)
  data && console.log(data.results)

  return (
    <div className="contactList">
      <Tabs data={data} setContactData={setContactData}/>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data...</div>}
      <div className="contactList__content">
        {contactData?.map((contact, index) => (
          <button key={index} className="contactList__content__name">
            {contact.name.last}, {contact.name.first.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ContactList
