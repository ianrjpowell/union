import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "@material-ui/core/Container";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Articles from "../components/sections/Articles";
import Expertise from "../components/sections/Expertise";
import Contact from "../components/sections/Newsletter";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Union Site Homepage</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <Container>
          <Hero
            headline="We design &amp; build meaningful spaces"
            ctaText="Our work"
          />
          <Projects />
          <Articles />
          <Expertise />
          <Contact />
        </Container>
      </main>

      <Footer />

      <footer className={styles.footer}></footer>
    </div>
  );
}
