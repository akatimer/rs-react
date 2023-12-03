import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

const MainPage: React.FC = (): JSX.Element => {
  const cardData = useAppSelector((state: RootState) => state.cards.cards);
  console.log(cardData);
  return (
    <>
      <div className="link-container">
        <Link to={'uncontroled'}>To Uncontroled Form</Link>
        <Link to={'controled'}>To Controled Form</Link>
      </div>
    </>
  );
};

export default MainPage;
