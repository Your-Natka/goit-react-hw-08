import { Box, Container, Link, Typography } from '@mui/material';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <Box component="footer" className={css.boxFooter}>
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color="inherit"
          align="center"
          sx={{ mt: 2, mb: 2 }}
        >
          {'Copyright © '}
          <Link className={css.logo} href="mailto:natalya1.10nb@gmail.com">
            Nataliia Bodnarchuk
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
