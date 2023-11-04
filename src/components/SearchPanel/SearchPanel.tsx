import { useContext } from 'react';
import './SearchPanel.css';
import DataContext from '../Context/DataContext';
import { searchManga } from '../../utils/api/searchManga';
import { MangaResponseType } from '../../utils/api/apiTypes';

const SearchPanel: React.FC = (): JSX.Element => {
  const { searchValue, setSearchValue, setIsLoading, setMangaResult } =
    useContext(DataContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getData = (): Promise<void | MangaResponseType> => {
    const result = searchManga(searchValue).then((res) => {
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
        localStorage.setItem('mangaSearch', searchValue);
        getData().then((res) => {
          if (res) {
            setMangaResult(res.data);
            console.log(res.data);
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
