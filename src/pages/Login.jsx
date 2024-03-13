import { LoginForm } from '../components/LoginForm/LoginForm';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 40,
    justifyContent: 'center',
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
