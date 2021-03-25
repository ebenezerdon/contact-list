import { useState, useMemo } from 'react'
import useFetch from 'react-fetch-hook'
import config from '../../configJson'
import './contactList.scss'

const ContactList = () => {
  const url = `${config.userUrl}/?results=${config.numberCards}`
  const { isLoading, data, error } = useFetch(url)
  const [contactData, setContactData] = useState(null)

  const filterByName = (data, value) => {
    return data?.results?.filter(person => {
      const firstLetter = person?.name?.last?.charAt(0)
      return value.toLowerCase() === firstLetter.toLowerCase()
    })
  }

  const tabs = (
    config.tabs.map(value => {
      const filteredData = filterByName(data, value)
      const doStuff = () => {
        setContactData(filteredData)
        console.log(contactData)
      }

      return (
        <div className="tab">
          <button onClick={doStuff}>{value}</button>
          <p>{filteredData?.length}</p>
        </div>
      )
    })
  )

  // console.log(data?.results)

  return (
    <div className="contactList">
      {tabs}
      {isLoading && <div>Loading...</div>}
      {data && <div>Hey</div>}
      {error && <div>Error fetching data...</div>}
      {contactData?.map(contact => (
        <div>{contact.name.last}</div>
      ))}
    </div>
  )
}

export default ContactList
