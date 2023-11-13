import { useNavigate, Params } from 'react-router-dom';
import { test, expect, vi } from 'vitest';
import Limit from './Limit';
import { render } from '@testing-library/react';

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );
  const mockNavigate = vi.fn();
  return {
    ...actual,
    useParams: (): Readonly<Params<string>> => ({
      page: '1',
    }),
    useNavigate: (): typeof mockNavigate => mockNavigate,
  };
});

test('Limit component', () => {
  const { getByText } = render(<Limit />);
  const button_12 = getByText('12');
  button_12.click();
  const mockNavigate = useNavigate();
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith(
    `/limit/${12}/page/1/term/${localStorage.getItem('mangaSearch') || ''}`
  );
  const button_15 = getByText('15');
  button_15.click();
  expect(mockNavigate).toHaveBeenCalledTimes(2);
  expect(mockNavigate).toHaveBeenCalledWith(
    `/limit/${12}/page/1/term/${localStorage.getItem('mangaSearch') || ''}`
  );
  const button_18 = getByText('18');
  button_18.click();
  expect(mockNavigate).toHaveBeenCalledTimes(3);
  expect(mockNavigate).toHaveBeenCalledWith(
    `/limit/${12}/page/1/term/${localStorage.getItem('mangaSearch') || ''}`
  );
  const button_21 = getByText('21');
  button_21.click();
  expect(mockNavigate).toHaveBeenCalledTimes(4);
  expect(mockNavigate).toHaveBeenCalledWith(
    `/limit/${12}/page/1/term/${localStorage.getItem('mangaSearch') || ''}`
  );
  const button_25 = getByText('25');
  button_25.click();
  expect(mockNavigate).toHaveBeenCalledTimes(5);
  expect(mockNavigate).toHaveBeenCalledWith(
    `/limit/${12}/page/1/term/${localStorage.getItem('mangaSearch') || ''}`
  );
});
