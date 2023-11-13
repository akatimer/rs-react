import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

describe('Error Boundary', () => {
  it('Error Boundary', () => {
    const TetsError = () => {
      throw new Error('Test');
    };
    render(
      <ErrorBoundary>
        <TetsError />
      </ErrorBoundary>
    );
    expect(screen.getByText('Sorry.. there was an error')).toBeVisible();
  });
});
