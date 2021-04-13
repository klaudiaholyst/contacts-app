import React, { createContext, useState, useReducer, useEffect } from 'react';

import axios from 'axios';

import { contactReducer } from '../reducers/contactReducer';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
    const [tagsList, setTagsList] = useState(['clients', 'family', 'friends', 'relatives']);

    const [initialContacts, setInitialContacts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'contacts.json',
            );
            setInitialContacts(result.data);
        }
        fetchData();
    }, []);

    const [contacts, dispatch] = useReducer(contactReducer, initialContacts,
        () => {
            const localData = localStorage.getItem('contacts');
            console.log(localData);
            return localData ? JSON.parse(localData) : initialContacts
        })

//tu jest problem

    useEffect(() => {
        dispatch({ type: 'IMPORT_CONTACTS', payload: initialContacts });
    }, [initialContacts])

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

    return (
        <ContactContext.Provider value={{ contacts, dispatch, tagsList }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactContextProvider;