
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from './ContactList.module.css'
import { useSelector } from "react-redux";


const ContactList = ()=> {

  const contacts = useSelector(selectContacts);
  const value = useSelector(selectNameFilter);

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
 );

  return (
    <ul className={style.list}>
    {filteredContacts.map(item => (
        <Contact key={item.id} contact={item} />
      ))}
    </ul>
  );
}

export default ContactList;

