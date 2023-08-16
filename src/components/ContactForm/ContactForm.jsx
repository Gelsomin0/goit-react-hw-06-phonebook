import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { getContactList } from 'redux/contactSlice';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contactList = useSelector(getContactList);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputValue = ({ target }) => {
        if (target.name === 'name') {
            setName(target.value);
            return;
        }

        if (target.name === 'number') {
            setNumber(target.value);
            return;
        }
    }

    const checkNewContact = (e) => {
        e.preventDefault();
        
        let isExist = false;
        const newContact = {
            id: nanoid(),
            name,
            number,
        }

        contactList.map((contact) => {
            if (contact.name === newContact.name) {
                alert(`${newContact.name} is already exist in contacts list!!!`);
                return isExist = true;
            }

            return contact;
        })

        if (!isExist) {
            dispatch(addContact(newContact));    
        }
        
        setName('');
        setNumber('');
    }

    return (
        <div>
            <form onSubmit={(e) => checkNewContact(e)} className={css.form}>
                <label>
                    <p>Name:</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleInputValue}
                        value={name}
                    />
                </label>

                <label>
                    <p>Phone number:</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleInputValue}
                        value={number}
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        </div>
    )
}