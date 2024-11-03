
import style from  './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
 
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
    <h1 className = {style.title}>Phonebook</h1>
   
    <ContactForm/>
    <SearchBox />
    <ContactList/>

  </div>
  )
}
export default App;