import styles from '@/styles/PageTitle.module.css';
interface PageTitleProps {
  titulo?: string;
}

export default function PageTitle ({titulo}: PageTitleProps) {
  return (
    <>
      <div className={styles.container}>
        <h1>{titulo}</h1>
      </div>
    </>
  )
}