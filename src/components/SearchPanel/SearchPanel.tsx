import { useContext } from 'react';
import './SearchPanel.css';
import DataContext from '../Context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import Limit from '../Limit/Limit';

const SearchPanel: React.FC = (): JSX.Element => {
  const { searchValue, setSearchValue } = useContext(DataContext);
  const navigate = useNavigate();
  const { limit, page } = useParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form
        className="search-form"
        onSubmit={async (e) => {
          e.preventDefault();
          setSearchValue(searchValue);
          localStorage.setItem('mangaSearch', searchValue);
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
