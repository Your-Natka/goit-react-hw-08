import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import Button from '../Button/Button';
import { addContacts } from '../../redux/contacts/operation';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('This is a required field')
    .min(3, 'Name must be at least 3 symbols long')
    .max(50, 'Name must be at less 50 symbols long')
    .test(
      'is-not-empty',
      'Name cannot be just spaces',
      value => value?.trim().length > 0
    ),
  number: Yup.string()
    .required('This is a required field')
    .min(3, 'Phone must be at least 3 symbols long')
    .max(50, 'Phone must be at less 50 symbols long')
    .matches(/^\+?[0-9\s-]+$/, 'Invalid phone number'),
});

export function ContactForm() {
  const nameField = useId();
  const numberField = useId();
  const dispatch = useDispatch();
  const handleAddContact = newContact => {
    dispatch(addContacts(newContact))
      .unwrap()
      .then(() => {
        toast.success('Contact has been added');
      })
      .catch(() => {
        toast.error('Creation error, try again');
      });
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={userSchema}
        onSubmit={handleAddContact}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.box}>
            <label htmlFor={nameField}>Name:</label>
            <Field
              className={css.label}
              type="text"
              name="name"
              placeholder="Name Surname"
              id={nameField}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.box}>
            <label htmlFor={numberField}>Phone:</label>
            <Field
              className={css.label}
              name="number"
              placeholder="Number"
              id={numberField}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <Button type="submit" className={css.button}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
