import css from './Button.module.css';

const Button = ({ id, children, onClick = () => {}, type }) => {
  return (
    <button type={type} onClick={() => onClick(id)} className={css.button}>
      {children}
    </button>
  );
};
export default Button;
