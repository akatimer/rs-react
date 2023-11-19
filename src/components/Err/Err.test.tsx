import { describe, expect, vi, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import Err from './Err';

describe('Err component', () => {
  it('throws an error when rendered', () => {
    const mockError = vi.fn();
    globalThis.console.error = mockError;

    expect(() => render(<Err />)).toThrow('Fatal Error!!!');
  });
});
