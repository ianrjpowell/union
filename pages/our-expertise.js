import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Expertise</title>
      </Head>

      <main className={styles.main}>
        <Container>
          <h1>Our Expertise</h1>
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
