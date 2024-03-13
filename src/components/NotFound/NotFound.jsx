import css from './NotFound.module.css';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={css.wrapper}>
      <div className={css.textBlock}>
        <h1 className={css.title}>Page Not Found</h1>
        <p className={css.description}>
          We can`t seem to find the page you`re looking for. Please check the
          URL.
        </p>
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">
            Go to Homepage
          </NavLink>
        </nav>
      </div>
      <div>
        <img
          className={css.img}
          src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg"
          alt="NotFoundImg"
        />
      </div>
    </div>
  );
}
