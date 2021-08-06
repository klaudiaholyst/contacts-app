import React, { createContext, useState, useReducer, useEffect } from 'react';

import { contactReducer } from '../reducers/contactReducer';

import data from '../data/contacts.json';

export const ContactContext = createContext();


const ContactContextProvider = (props) => {
    const [tagsList, setTagsList] = useState(['clients', 'family', 'friends', 'relatives']);
    const [activeTag, setActiveTag] = useState('');

    const [showTrash, setShowTrash] = useState(false);

    const [contacts, dispatch] = useReducer(contactReducer, []);

    useEffect(() => {
        const localData = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : null;
        if (localData) {
            dispatch({ type: 'IMPORT_CONTACTS', payload: localData });
        } else {
            dispatch({ type: 'IMPORT_CONTACTS', payload: data })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

    return (
        <ContactContext.Provider value={{ contacts, dispatch, tagsList, activeTag, setActiveTag, showTrash, setShowTrash }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactContextProvider;