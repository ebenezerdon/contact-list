import { useEffect } from 'react'
import './contactCard.scss'

const ContactCard = ({ mousePosition, contact }) => {
  useEffect(() => {
    const contactCard = document.querySelector('.contactCard')
    contactCard.style.left = (mousePosition[0] / 2) + 'px'
    contactCard.style.top = (mousePosition[1] / 2) + 'px'
  }, [mousePosition])

  return (
    <div className="contactCard">
      <div className="contactCard__photo">
        <img src={contact?.picture?.large} alt="contact" />
      </div>
      <div>
        <p className="contactCard__name">{contact?.name?.first.toUpperCase()}, {contact?.name?.last}</p>
        <div className="contactCard__details">
          <p><strong>e-mail</strong> {contact?.email}</p>
          <p><strong>phone</strong> {contact?.cell}</p>
          <p><strong>street</strong> {contact?.location?.street?.name}</p>
          <p><strong>city</strong> {contact?.location?.city}</p>
          <p><strong>state</strong> {contact?.location?.state}</p>
          <p><strong>postcode</strong> {contact?.location?.postcode}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
