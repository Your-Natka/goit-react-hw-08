import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const styles = {
  container: {
    display: 'flex',
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}
