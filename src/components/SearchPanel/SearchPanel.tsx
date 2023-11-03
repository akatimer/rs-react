import { useContext } from 'react';
import './SearchPanel.css';
import { getStarshipsResultsType } from '../../utils/api/getStarships';
import DataContext from '../Context/DataContext';
import { searchStarships } from '../../utils/api/searchStarships';

const SearchPanel: React.FC = (): JSX.Element => {
  const { searchValue, setSearchValue, setIsLoading, setStarshipsResult } =
    useContext(DataContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getData = (): Promise<void | getStarshipsResultsType> => {
    const result = searchStarships(searchValue).then((res) => {
      return res;
    });
    return result;
  };

  return (
    <form
      className="search-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSearchValue(searchValue);
        localStorage.setItem('starshipSearch', searchValue);
        getData().then((res) => {
          if (res) {
            setStarshipsResult(res.results);
            setIsLoading(false);
          }
        });
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
  );
};

export default SearchPanel;
