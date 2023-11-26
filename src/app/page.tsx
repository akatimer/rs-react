import TopSection from '@/components/TopSection/TopSection';
import styles from './page.module.css';
import Catalog from '@/components/Catalog/Catalog';

export default function Home() {
  return (
    <>
      <header>
        <TopSection />
      </header>
      <main className={styles.main}>
        {/* <Catalog /> */}
      </main>
    </>
  );
}
