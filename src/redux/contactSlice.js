import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        { id: 'id-5', name: 'Ivan Dobrotiuk', number: '167-19-61' },
        { id: 'id-6', name: 'Piero Giacosa', number: '459-12-56' },
    ]
};

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            let isExist = false;

            state.contacts.map((contact) => {
                if (contact.name === action.payload.name) {
                    alert(`${action.payload.name} is already exist in contacts list!!!`);
                    isExist = true;
                    return;
                }
            })

            if (!isExist) {
                return void (state.contacts.push(action.payload));
            }
        },
        deleteContact: (state, action) => {
            let newContacts = state.contacts.filter((el) => el.id !== action.payload);
            return void (state.contacts = [...newContacts]);
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions;