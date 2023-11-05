import { useNavigate, useParams } from 'react-router-dom';
import './Limit.css';

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { page } = useParams();
  return (
    <div className="limits">
      <button
        className="limits__button"
        content="9"
        onClick={() => {
          navigate(
            `/limit/${25}/page/${page}/term/${localStorage.getItem(
              'mangaSearch'
            )}`
          );
        }}
      />
      <button
        className="limits__button"
        content="12"
        onClick={() => {
          navigate(
            `/limit/${25}/page/${page}/term/${localStorage.getItem(
              'mangaSearch'
            )}`
          );
        }}
      />
      <button
        className="limits__button"
        content="15"
        onClick={() => {
          navigate(
            `/limit/${25}/page/${page}/term/${localStorage.getItem(
              'mangaSearch'
            )}`
          );
        }}
      />
      <button
        className="limits__button"
        content="18"
        onClick={() => {
          navigate(
            `/limit/${25}/page/${page}/term/${localStorage.getItem(
              'mangaSearch'
            )}`
          );
        }}
      />
      <button
        className="limits__button"
        content="25"
        onClick={() => {
          navigate(
            `/limit/${25}/page/${page}/term/${localStorage.getItem(
              'mangaSearch'
            )}`
          );
        }}
      />
    </div>
  );
};

export default App;
