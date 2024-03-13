import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from '../../hooks';
import avatar from './avatar.png';
import Button from '../Button/Button';
import { Avatar, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={user.name} src={avatar} sx={{ width: 36, height: 36 }} />
      Welcome, {user.name}!
      <Button
        type="button"
        variant="contained"
        size="medium"
        startIcon={<LogoutOutlinedIcon />}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};
