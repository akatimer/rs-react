import { Link, useNavigate, useParams } from 'react-router-dom';
import './CardDetailed.css';

import Loader from '../Loader/Loader';
import searchMangaById from '../../utils/api/searchMangaById';
import sliceDetailedCard from '../../store/sliceDetailedCard';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';

const CardDetailed: React.FC = (): JSX.Element => {
  const { limit, page, term, id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = searchMangaById.endpoints.searchManga.useQuery({
    id,
  });
  const navigation = useNavigate();

  useEffect(() => {
    if (data) {
      dispatch(sliceDetailedCard.actions.setDetaildedCard(data));
    }
  }, [data, dispatch]);

  return (
    <div className="card__detailed loader_detailed">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="card__detailed">
            <Link
              className="link_button"
              to={
                term
                  ? `/limit/${limit}/page/${page}/term/${term}`
                  : `/limit/${limit}/page/${page}/term/`
              }
            >
              {'CLOSE'}
            </Link>
            <div className="card__detailed__img">
              <img src={data.data.images.webp.image_url} />
            </div>
            <div className="card__info">
              <div className="card__line">
                <h3>Title: </h3>
                <h3>{data.data.title}</h3>
              </div>
              <div className="card__line">
                <h3>Score: </h3>
                <h3>{data.data.score || '---'}</h3>
              </div>
              <div className="card__line">
                <h3>Status: </h3>
                <h3>{data.data.status}</h3>
              </div>
              <div className="card__line__synopsys">
                <h3>Synopsys: </h3>
                <h3>{data.data.synopsis || '---'}</h3>
              </div>
            </div>
          </div>
          <div
            className="close_wrapper"
            onClick={() =>
              navigation(
                `${
                  term
                    ? `/limit/${limit}/page/${page}/term/${term}`
                    : `/limit/${limit}/page/${page}/term/`
                }`
              )
            }
          ></div>
        </>
      )}
    </div>
  );
};

export default CardDetailed;
