

import { selectFilteredContacts} from "../../redux/selectors";
import Contact from "../Contact/Contact";
import style from './ContactList.module.css'
import { useSelector } from "react-redux";


const ContactList = ()=> {

  const filteredContacts = useSelector(selectFilteredContacts);

  
  return (
    <ul className={style.list}>
     {filteredContacts?.map(({contact }) => (
        <li key={contact.id} className={style.item}>
          <Contact data = {contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

