

import { selectFilteredContacts} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from './ContactList.module.css'
import { useSelector } from "react-redux";


const ContactList = ()=> {

  const filteredContacts = useSelector(selectFilteredContacts);


  


  return (
    <ul className={style.list}>
     {filteredContacts.map(({id, item }) => (
        <li key={id} className={style.item}>
          <Contact contactData={{item, id }} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

