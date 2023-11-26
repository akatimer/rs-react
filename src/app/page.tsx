import TopSection from '@/components/TopSection/TopSection';
import styles from './page.module.css';
import Catalog from '@/components/Catalog/Catalog';

export type HomeParams = {
  params: object;
  searchParams: {
    limit?: string;
    page?: string;
    term?: string;
  };
};

async function getData({
  limit,
  page,
  term,
}: {
  limit: string;
  page: string;
  term: string;
}) {
  const res = await fetch(
    `https://api.jikan.moe/v4/manga?sfw=true&limit=${limit}&page=${page}&q=${term}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home(params: HomeParams) {
  const { limit, page, term } = params.searchParams;

  const data = await getData({
    limit: limit ?? '15',
    page: page ?? '1',
    term: term ?? '',
  });
  return (
    <>
      <header>
        <TopSection />
      </header>
      <main className={styles.main}>
        <Catalog data={data} />
      </main>
    </>
  );
}
