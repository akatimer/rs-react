import './Limit.css';
import sliceLimit from '../../store/sliceLimit';
import { useAppDispatch } from '../../store/hooks';
import { useRouter } from 'next/navigation';

const Limit: React.FC = (): JSX.Element => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className="limits">
      <button
        className="limits__button"
        onClick={() => {
          dispatch(sliceLimit.actions.setSliceLimit('12'));
          navigate.push(
            `/?limit=${12}&page=1&term=${
              localStorage.getItem('mangaSearch') ?? ''
            }`
          );
        }}
      >
        {12}
      </button>

      <button
        className="limits__button"
        onClick={() => {
          dispatch(sliceLimit.actions.setSliceLimit('15'));
          navigate.push(
            `/?limit=${15}&page=1&term=${
              localStorage.getItem('mangaSearch') ?? ''
            }`
          );
        }}
      >
        {15}
      </button>
      <button
        className="limits__button"
        onClick={() => {
          dispatch(sliceLimit.actions.setSliceLimit('18'));
          navigate.push(
            `/?limit=${18}&page=1&term=${
              localStorage.getItem('mangaSearch') ?? ''
            }`
          );
        }}
      >
        {18}
      </button>
      <button
        className="limits__button"
        onClick={() => {
          dispatch(sliceLimit.actions.setSliceLimit('21'));
          navigate.push(
            `/?limit=${21}&page=1&term=${
              localStorage.getItem('mangaSearch') ?? ''
            }`
          );
        }}
      >
        {21}
      </button>
      <button
        className="limits__button"
        onClick={() => {
          navigate.push(
            `/?limit=${25}&page=1&term=${
              localStorage.getItem('mangaSearch') ?? ''
            }`
          );
        }}
      >
        {25}
      </button>
    </div>
  );
};

export default Limit;
