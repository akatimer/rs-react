import { render } from '@testing-library/react';
import { describe, expect, vi, it } from 'vitest';
import React from 'react';
import { MemoryRouter, Params, useParams } from 'react-router-dom';
import { mockMangaResponse } from '../../utils/mock/mangaMockResponse';
import CardDetailed from './CardDetailed';

const getMock = vi.fn();
globalThis.fetch = getMock;

describe('renders CardDetailed component', async () => {
  vi.mock('react-router-dom', async () => {
    const actual =
      await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
      );
    return {
      ...actual,
      useNavigate: vi.fn(),
      useParams: (): Readonly<Params<string>> => ({
        limit: '15',
        page: '1',
        term: 'one',
      }),
      useLoaderData: vi.fn(() => ({ data: mockMangaResponse })),
    };
  });

  render(
    <MemoryRouter>
      <CardDetailed />
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
