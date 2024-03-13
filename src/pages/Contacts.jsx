import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operation';
import PhoneBook from '../components/Phonebook/Phonebook';
import avatar from '../components/photo/contacts.png';
import { Avatar } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="">
      <h2>
        <Avatar src={avatar} sx={{ width: 36, height: 36 }} />
      </h2>
      <PhoneBook />
    </div>
  );
}
