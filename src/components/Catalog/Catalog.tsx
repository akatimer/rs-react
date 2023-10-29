import { Component } from 'react';
import './Catalog.css';
import DataContext from '../Context/DataContext';
import Card from '../Card/Card';

class Catalog extends Component {
  declare context: React.ContextType<typeof DataContext>;

  render() {
    const cards = this.context.starshipsResult;
    return (
      <div>
        {cards.map((card) => (
          <div key={card.url}>
            <Card
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
          </div>
        ))}
      </div>
    );
  }
}

Catalog.contextType = DataContext;

export default Catalog;
