import './SearchPanel.css';
import { useNavigate, useParams } from 'react-router-dom';
import Limit from '../Limit/Limit';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import sliceSearchValue from '../../store/sliceSearchValue';

const SearchPanel: React.FC = (): JSX.Element => {
  const searchValue = useAppSelector((state) => {
    return state.search.searchValue;
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { limit, page } = useParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sliceSearchValue.actions.setSearchValue(e.target.value));
  };

  return (
    <>
      <form
        className="search-form"
        onSubmit={async (e) => {
          e.preventDefault();
          dispatch(sliceSearchValue.actions.setLSTerm(searchValue));
          navigate(`/limit/${limit}/page/${page}/term/${searchValue}`);
        }}
      >
        <input
          className="search-form__input"
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => onChange(e)}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
      <Limit />
    </>
  );
};

export default SearchPanel;
