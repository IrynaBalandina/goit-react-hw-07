
import style from './Contact.module.css';
import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';


const Contact = ({ contactData }) => {
  const dispatch = useDispatch();

  const { contact, id } = contactData || {};

  if (!contact) {
    return <div>No contact information available</div>;
  }
  return (
    <>
    <div className = {style.contact}>
      <div className = {style.contactInfo}>

      <p>
          <FaUser className={style.icon} />
          Name: {contact.name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          Phone: {contact.number}
        </p>
      </div>
      <div className={style.buttonBlock}>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
      </div>
    </div></>
  )
}

export default Contact;
