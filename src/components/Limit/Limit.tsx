import { useNavigate, useParams } from 'react-router-dom';
import './Limit.css';

const Limit: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { page } = useParams();
  return (
    <div className="limits">
      <button
        className="limits__button"
        onClick={() => {
          navigate(
            `/limit/${12}/page/1/term/${
              localStorage.getItem('mangaSearch') || ''
            }`
          );
        }}
      >
        {12}
      </button>

      <button
        className="limits__button"
        onClick={() => {
          navigate(
            `/limit/${15}/page/1/term/${localStorage.getItem('mangaSearch')}`
          );
        }}
      >
        {15}
      </button>
      <button
        className="limits__button"
        onClick={() => {
          navigate(
            `/limit/${18}/page/1/term/${localStorage.getItem('mangaSearch')}`
          );
        }}
      >
        {18}
      </button>
      <button
        className="limits__button"
        onClick={() => {
          navigate(
            `/limit/${21}/page/1/term/${localStorage.getItem('mangaSearch')}`
          );
        }}
      >
        {21}
      </button>
      <button
        className="limits__button"
        onClick={() => {
          navigate(
            `/limit/${25}/page/${page}/term/${localStorage.getItem(
              'mangaSearch'
            )}`
          );
        }}
      >
        {25}
      </button>
    </div>
  );
};

export default Limit;
