import { describe, expect, it, vi } from 'vitest';
import { mockResponseData } from '../mock/mangaMockResponse';
import { BASE_URL_SEARCH } from '../const/const';
import { searchMangaById } from './searchMangaById';

const getMock = vi.fn();
globalThis.fetch = getMock;

describe('SearchMangaById: ', () => {
  it('test with provided id', async () => {
    getMock.mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponseData),
    });

    await searchMangaById('25');

    expect(getMock).toHaveBeenCalledWith(`${BASE_URL_SEARCH}25`);
  });
});
