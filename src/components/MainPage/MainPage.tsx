import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import Cards from '../Card/Card';

const MainPage: React.FC = (): JSX.Element => {
  const cardData = useAppSelector((state: RootState) => state.cards.cards);
  const images = useAppSelector((state: RootState) => state.cards.images);
  const imagesUncontrol = [...images].reverse();

  const cardDataControl = useAppSelector(
    (state: RootState) => state.controledCards.cards
  );
  const imagesContr = useAppSelector(
    (state: RootState) => state.controledCards.images
  );
  const imagesControl = [...imagesContr].reverse();

  console.log(cardData, cardDataControl);
  return (
    <>
      <div className="link-container">
        <Link to={'uncontroled'}>To Uncontroled Form</Link>
        <Link to={'controled'}>To Controled Form</Link>
      </div>
      <div className="wrapper__cards">
        <div className="wrapper__cards_uncontrolled">
          {[...cardData].reverse().map((card, i) => {
            return (
              <Cards
                card={card}
                key={i}
                image={imagesUncontrol[i]}
                lastUpdate={i === 0 ? 'lastUpdate' : ''}
              />
            );
          })}
        </div>
        <div className="wrapper__cards_controled">
          {[...cardDataControl].reverse().map((card, i) => {
            return (
              <Cards
                card={card}
                key={i}
                image={imagesControl[i]}
                lastUpdate={i === 0 ? 'lastUpdate' : ''}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
