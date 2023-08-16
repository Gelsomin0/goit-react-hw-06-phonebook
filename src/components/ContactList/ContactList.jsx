import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "redux/contactSlice";
import css from './ContactList.module.css'
import { getContactList } from "redux/contactSlice";

export const ContactList = () => {
    const filter = useSelector((state) => state.filter);
    const contactList = useSelector(getContactList);
    const dispatch = useDispatch();

    return (
        <ol className={css.contact_list}>
            {filter === ''
                ? contactList.map(({ id, name, number }) => {
                    return (
                        <li key={id} className={css.contact_list_item}>
                            <p>
                                <b>{name}:</b> {number}
                            </p>
                            <button
                                id={id}
                                className={css.delete_button}
                                onClick={() => dispatch(deleteContact(id))}
                            >Delete</button>
                        </li>
                    )
                })
                : contactList.map(({ id, name, number }) => {
                    let item;
                    if (name.toLowerCase().includes(filter)) {
                        return item = (
                            <li key={id} className={css.contact_list_item}>
                                <p>
                                    <b>{name}:</b> {number}
                                </p>
                                <button
                                    id={id}
                                    className={css.delete_button}
                                    onClick={() => dispatch(deleteContact(id))}
                                >Delete</button>
                            </li>
                        )
                    }
                    return item;
                })
            }
        </ol>
    )
}