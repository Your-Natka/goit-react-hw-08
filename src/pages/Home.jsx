import { Paper, Typography, Box, Button } from '@mui/material';
import phonebook from '../components/photo/phonebook.png';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selector';
import { boxMainStyle, paperMainStyle } from './StylePages';
import { StyledNavLink } from '../components/Navigation/StyleNav';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <Paper sx={paperMainStyle(phonebook)}>
      <Box sx={boxMainStyle}>
        {isLoggedIn ? (
          <>
            <Typography component="h1" variant="h3" gutterBottom>
              Hi, {user.name}! <br />
              Welcome to your phonebook.{' '}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Hello! It is your phonebook.{' '}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Please log in to your account or register.
            </Typography>
            <Button variant="contained">
              <StyledNavLink to="/login">Sign In</StyledNavLink>
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
}
