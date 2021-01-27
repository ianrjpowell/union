import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "@material-ui/core/Container";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Union Site Homepage</title>
      </Head>

      <main className={styles.main}>
        <Container>
          <Hero
            headline="We design &amp; build meaningful spaces"
            ctaText="Our work"
          />
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
