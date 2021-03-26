import { useEffect, useState } from 'react'
import config from '../../configJson'

const filterByName = (data, value) => {
  return data?.results?.filter(person => {
    const firstLetter = person?.name?.first?.charAt(0)
    return value.toLowerCase() === firstLetter.toLowerCase()
  })
}

const Tabs = ({data, setContactData, setCardIsOpen}) => {
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    setContactData(filterByName(data, 'a'))
  }, [setContactData, data])

  const tabKeys = config.tabs.map(value => {
    const filteredData = filterByName(data, value)
    return (
      <button
        className={`contactList__tab__keys ${activeTab === value && "contactList__tab__keys-active"}`}
        onClick={() => {
          setActiveTab(value)
          setContactData(filteredData)
          setCardIsOpen(false)
        }}
        key={value}
      >
        <p className="contactList__tab__keys__text">
          {value}<sub>{filteredData?.length}</sub>
        </p>
      </button>
    )
  })

  return (
    <>
      <div className="contactList__tab">
        {tabKeys}
      </div>
    </>
  )
}

export default Tabs
