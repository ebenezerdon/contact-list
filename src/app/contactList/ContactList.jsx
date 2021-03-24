import useFetch from 'react-fetch-hook'

const ContactList = () => {
  const { isLoading, data, error } = useFetch('https://api.randomuser.me/?results=120')

  console.log(data?.results)

  return (
    <div className="contactList">
      {isLoading && <div>Loading...</div>}
      {data && <div>Hey</div>}
      {error && <div>Error fetching data...</div>}
    </div>
  )
}

export default ContactList
