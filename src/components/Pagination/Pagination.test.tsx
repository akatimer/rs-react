import { render } from '@testing-library/react';
import { describe, expect, vi, it } from 'vitest';
import React from 'react';
import { MemoryRouter, Params, useParams } from 'react-router-dom';
import Pagination from './Pagination';
import { mockMangaResponse } from '../../utils/mock/mangaMockResponse';

const getMock = vi.fn();
globalThis.fetch = getMock;

describe('renders Card component', async () => {
  vi.mock('react-router-dom', async () => {
    const actual =
      await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
      );
    return {
      ...actual,
      useParams: (): Readonly<Params<string>> => ({
        limit: '15',
        page: '1',
        term: 'one',
      }),
      useLoaderData: vi.fn(() => ({ data: mockMangaResponse })),
    };
  });
  // describe('Test pagination data', async () => {
  //   const routes = [
  //     {
  //       path: 'pagination',
  //       element: <Pagination />,
  //       loader: () => mockLoader,
  //     },
  //   ];

  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ['pagination'],
  //   });

  //   render(<RouterProvider router={router} />);
  // });

  render(
    <MemoryRouter>
      <Pagination />
    </MemoryRouter>
  );
  describe('useParams hook', () => {
    it('returns the expected parameters', () => {
      const { limit, page, term } = useParams();
      expect(limit).toBe('15');
      expect(page).toBe('1');
      expect(term).toBe('one');
    });
  });
});
