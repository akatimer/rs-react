import { useContext } from 'react';
import './Catalog.css';
import DataContext from '../Context/DataContext';
import Card from '../Card/Card';

const Catalog: React.FC = (): JSX.Element => {
  const { starshipsResult } = useContext(DataContext);

  const cards = starshipsResult;
  return (
    <div className="catalog">
      {cards.map((card) => (
        <Card
          key={card.url}
          name={card.name}
          model={card.model}
          starship_class={card.starship_class}
          cost_in_credits={card.cost_in_credits}
          length={card.length}
          crew={card.crew}
          passengers={card.passengers}
          max_atmosphering_speed={card.max_atmosphering_speed}
          hyperdrive_rating={card.hyperdrive_rating}
          MGLT={card.MGLT}
          cargo_capacity={card.cargo_capacity}
        />
      ))}
    </div>
  );
};

export default Catalog;
