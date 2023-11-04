import { useContext } from 'react';
import './Catalog.css';
import DataContext from '../Context/DataContext';
import Card from '../Card/Card';

const Catalog: React.FC = (): JSX.Element => {
  const { mangaResult } = useContext(DataContext);

  const cards = mangaResult;
  return (
    <div className="catalog">
      {cards.map((card) => (
        <Card key={card.mal_id} {...card} />
      ))}
    </div>
  );
};

export default Catalog;
