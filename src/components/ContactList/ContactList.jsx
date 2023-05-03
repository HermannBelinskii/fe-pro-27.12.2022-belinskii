import axios from 'axios';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../Button/Button';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsTable from './components/ContactTable/ContactsTable';


const ContsctList = () => {
    const [contacts, setContacts] = useState([]);
    const [isVisible, setIsVisible] = useState(false)
    const [newContact, setNewContact] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        id: Date.now(),
    });


    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((data) => setContacts(data.data));
    }, []);
    
    const memoizedContacts = useMemo(() => {
        return contacts;
    }, [contacts]);

    const handleDelete = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts)
    }

    const toggleVisibleButton = () => {
        setIsVisible((prev) => !prev)
    }

    const handleChange = useCallback(
        (e) => {
          const { name, value } = e.target;
          setNewContact((prev) => ({ ...prev, [name]: value }));
        },
        [newContact]
      );

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setContacts((prev) => [...prev, newContact]);
        setNewContact({
            firstName: '',
            lastName: '',
            phone: '',
            id: Date.now(),
          });
        toggleVisibleButton()
    }, [newContact]) 

    return ( 
        <>
            <ContactsTable 
                data={memoizedContacts} 
                onClick={handleDelete}
            />
            <Button 
                onClick={() => toggleVisibleButton()} 
                title={isVisible 
                    ? 'CLOSE ADD-CONTACT FORM'
                    : 'SHOW ADD-CONTACT FORM'
                }
                type={'button'}
                className={'btn btn-success'}
            />
            {isVisible && <ContactForm onChange={handleChange} onSubmit={handleSubmit} value={newContact}/>}
            
        </>
    );
}
 
export default  ContsctList ;