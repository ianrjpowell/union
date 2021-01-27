import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "@material-ui/core/Container";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Articles from "../components/sections/Articles";
import Expertise from "../components/sections/Expertise";
import Contact from "../components/sections/Contact";
import Newsletter from "../components/sections/Newsletter";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Union Site Homepage</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero
          headline="We design &amp; build meaningful spaces"
          ctaText="Our work"
        />
        <Container>
          <Projects
            headline="Our work"
            subheadline="If you can dream it, we can build it."
            ctaText="All work"
          />
          <Articles
            headline="Recent articles"
            subheadline="Insights from the industry."
            ctaText="See all"
          />
        </Container>
        <Expertise
          headline="Expertise"
          subheadline="Donec id mi porta gravida metus."
          text="Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Nullam quis risus eget urna."
          ctaText="Learn more"
        />
        <Contact
          headline="Contact us"
          subheadline="Maecenas sed diam eget."
          text="Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          ctaText="Contact us"
        />
        <Newsletter
          headline="Newsletter signup"
          text="Nulla vitae elit libero pharetra augue dolor."
          ctaText="Subscribe"
        />
      </main>

      <Footer />

      <footer className={styles.footer}></footer>
    </div>
  );
}
