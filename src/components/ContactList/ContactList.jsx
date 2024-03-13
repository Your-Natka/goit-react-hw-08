import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selector';
import { deleteContacts } from '../../redux/contacts/operation';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <div className={css.container}>
      <ul className={css.contact}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={() => handleDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
