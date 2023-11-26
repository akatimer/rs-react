'use client';
import './SearchPanel.css';
import Limit from '@/components/Limit/Limit';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import sliceSearchValue from '@/store/sliceSearchValue';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchPanel: React.FC = (): JSX.Element => {
  const searchValue = useAppSelector((state) => {
    return state.search.searchValue;
  });
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

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
          navigate.push(`/?limit=${limit}&page=${page}&term=${searchValue}`);
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
