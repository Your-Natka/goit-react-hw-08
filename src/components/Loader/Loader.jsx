import css from './Loader.module.css';
import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.container}>
      <FallingLines
        color="#0066b2"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};
