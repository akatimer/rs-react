import { CardsType } from '../../store/slice/formDataCardsSlice';
import './card.css';

type CardProps = {
  card: CardsType;
  image: string;
  lastUpdate: string;
};

const Card: React.FC<CardProps> = ({
  card,
  image,
  lastUpdate,
}): JSX.Element => {
  return (
    <div style={lastUpdate ? { border: '1px solid orange' } : {}}>
      <p>Name: {card.name}</p>
      <p>Age: {card.age}</p>
      <p>Email: {card.email}</p>
      <p>Gender: {card.gender}</p>
      <div>
        <img src={image} alt={card.name} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
