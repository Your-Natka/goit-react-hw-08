import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operation';
import Button from '../Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id))
      .unwrap()
      .then(() => {
        toast.success('The contact has been deleted');
      })
      .catch(() => {
        toast.error('Deletion error ');
      });
  };

  return (
    <li className={css.item}>
      <div className={css.box}>
        <div className={css.str}>
          <IoPerson className={css.icon} />
          <span className={css.name}> {name}</span>
        </div>
        <div className={css.str}>
          <FaPhoneAlt className={css.icon} />
          <span className={css.number}> {number}</span>
        </div>
      </div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleDeleteContact}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
};
export default Contact;
