import TopSection from '@/components/TopSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header>
        <TopSection />
      </header>
      <main className={styles.main}>TEST APP</main>
    </>
  );
}
