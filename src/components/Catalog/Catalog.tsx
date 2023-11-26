import './Catalog.css';
import Card from '../Card/Card';
import { MangaResponseData, MangaResponseType } from '../../utils/api/apiTypes';
import Pagination from '../Pagination/Pagination';

const Catalog: React.FC<{
  data: MangaResponseType;
}> = ({ data }): JSX.Element => {
  if (data) {
    return (
      <>
        <div className="catalog">
          {data.data.map((card: MangaResponseData) => (
            <Card key={card.mal_id} {...card} />
          ))}
        </div>
        <Pagination data={data} />
      </>
    );
  } else {
    return <div>No data</div>;
  }
};

export default Catalog;
