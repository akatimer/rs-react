import './CardDetailed.css';
import { MangaResponseData } from '@/utils/api/apiTypes';
import Image from 'next/image';

const CardDetailed: React.FC<{ data: { data: MangaResponseData } }> = ({
  data,
}): JSX.Element => {
  return (
    <>
      <div className="card__detailed">
        <div className="card__detailed__img">
          <Image
            src={data.data.images.webp.image_url}
            alt={data.data.title}
            width={222}
            height={350}
            priority
          />
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
    </>
  );
};

export default CardDetailed;
