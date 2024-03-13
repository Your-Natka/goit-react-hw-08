import { Toolbar } from '@mui/material';
import { useAuth } from '../../hooks';
import { StyledNavLink, toolbarStyle } from '../Navigation/StyleNav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Toolbar>
  );
};
