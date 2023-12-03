import { Link } from 'react-router-dom';

const MainPage: React.FC = (): JSX.Element => {
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
