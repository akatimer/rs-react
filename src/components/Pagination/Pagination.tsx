import { Await, Link, useLoaderData, useParams } from 'react-router-dom';
import './Pagintaion.css';
import { MangaPromise } from '../Catalog/Catalog';

const Pagination: React.FC = (): JSX.Element => {
  const { data } = useLoaderData() as MangaPromise;
  const { limit, page, term } = useParams();

  return (
    <Await resolve={data}>
      {(data) => {
        console.log(312, limit, page, term);
        return (
          <div className="pagination">
            <Link
              className="link_button"
              to={
                term
                  ? `/limit/${limit}/page/${1}/term/${localStorage.getItem(
                      'mangaSearch'
                    )}`
                  : `/limit/${limit}/page/${1}/term/`
              }
            >
              {'<<'}
            </Link>
            <Link
              className="link_button"
              to={`/limit/${limit}/page/${
                Number(page) > 2 ? Number(page) - 1 : page
              }/term/${term || ''}`}
            >
              {'<'}
            </Link>
            <div className="link_button">{page}</div>
            <Link
              className="link_button"
              to={`/limit/${limit}/page/${
                Number(page) < data.pagination.last_visible_page
                  ? Number(page) + 1
                  : page
              }/term/${term}`}
            >
              {'>'}
            </Link>
            <Link
              className="link_button"
              to={`/limit/${limit}/page/${data.pagination.last_visible_page}/term/${term}`}
            >
              {'>>'}
            </Link>
          </div>
        );
      }}
    </Await>
  );
};

export default Pagination;
