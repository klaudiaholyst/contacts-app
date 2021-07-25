export const contactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, {
                name: action.contact.name,
                surname: action.contact.surname,
                email: action.contact.email,
                number: action.contact.number,
                tags: action.contact.tag.join(', '),
                id: new Date().getTime()
            }]
        case 'IMPORT_CONTACTS':
            return action.payload;
        default:
            return state
    }
}