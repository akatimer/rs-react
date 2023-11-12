import { render, screen } from '@testing-library/react';
import { describe, expect, vi, it } from 'vitest';
import React from 'react';
import Card from './Card';
import { MemoryRouter, Params, useParams } from 'react-router-dom';
import { mockResponseData } from '../../utils/mock/mangaMockResponse';

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
    };
  });
  render(
    <MemoryRouter>
      <Card {...mockResponseData} />
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
  const currentCardTitle = screen.getByText('One');
  if (currentCardTitle) {
    currentCardTitle.click();
  }
  expect(screen.getByRole('link')).toHaveAttribute(
    'href',
    '/limit/15/page/1/term/one/detailed/1'
  );
  expect(screen.getByText('8.13')).toBeDefined();
  expect(screen.getByText('12')).toBeDefined();
});
