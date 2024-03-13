import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor="search-filter" className={css.text}>
        Find contacts by name:
      </label>
      <input
        id="search-filter"
        className={css.box}
        type="text"
        value={filter}
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
    </div>
  );
};
export default SearchBox;
