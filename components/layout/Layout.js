import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <headers className={styles.header}>
        <div className={styles.left}>
          <Link href="/">FakeFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </headers>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/merfdev">MerfDev</a> Next.js | FakeFood
        project © 2024
      </footer>
    </>
  );
}

export default Layout;
