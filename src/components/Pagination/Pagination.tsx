'use client';
import './Pagintaion.css';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MangaResponseType } from '@/utils/api/apiTypes';

const Pagination: React.FC<{
  data: MangaResponseType;
}> = ({ data }): JSX.Element => {
  const term = useAppSelector((state) => {
    state.search.searchValue;
  });
  const urlLimitParam = useSearchParams().get('limit');
  const page = useSearchParams().get('page');
  const urlTermParam = useSearchParams().get('term');

  return (
    <div className="pagination">
      <Link
        className="link_button"
        href={`/?limit=${urlLimitParam}&page=${1}&term=${term}`}
      >
        {'<<'}
      </Link>
      <Link
        className="link_button"
        href={`/?limit=${urlLimitParam}&page=${
          Number(page) > 1 ? Number(page) - 1 : page
        }&term=${urlTermParam ?? ''}`}
      >
        {'<'}
      </Link>
      <div className="link_button">{page}</div>
      <Link
        className="link_button"
        href={`/?limit=${urlLimitParam}&page=${
          Number(page) < data.pagination.last_visible_page
            ? Number(page) + 1
            : page
        }&term=${urlTermParam ?? ''}`}
      >
        {'>'}
      </Link>
      <Link
        className="link_button"
        href={`/?limit=${urlLimitParam}&page=${
          data.pagination.last_visible_page
        }&term=${urlTermParam ?? ''}`}
      >
        {'>>'}
      </Link>
    </div>
  );
};

export default Pagination;
