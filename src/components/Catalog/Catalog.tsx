import { Component } from 'react';
import './Catalog.css';
import DataContext from '../Context/DataContext';

class Catalog extends Component {
  declare context: React.ContextType<typeof DataContext>;

  render() {
    const cards = this.context.starshipsResult;
    return (
      <div>
        {cards.map((card) => (
          <div key={card.url}>{card.name}</div>
        ))}
      </div>
    );
  }
}

Catalog.contextType = DataContext;

export default Catalog;
