import { describe, expect, it, vi } from 'vitest';
import { mockResponseData } from '../mock/mangaMockResponse';
import { searchManga } from './searchManga';
import { BASE_URL } from '../const/const';

const getMock = vi.fn();
globalThis.fetch = getMock;

describe('SearchManga: ', () => {
  it('test with provided params', async () => {
    getMock.mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponseData),
    });

    await searchManga('25', '1', 'one');

    expect(getMock).toHaveBeenCalledWith(`${BASE_URL}&limit=25&page=1&q=one`);
  });

  it('test without provided page', async () => {
    getMock.mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponseData),
    });

    await searchManga();

    expect(getMock).toHaveBeenCalledWith(`${BASE_URL}&limit=15&page=1`);
  });
});
