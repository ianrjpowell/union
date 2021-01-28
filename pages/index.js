import Head from "next/head";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    <div>
      <Head>
        <title>Union Site Homepage</title>
      </Head>

      <Header />

      <main>
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
      <style jsx global>{`
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: proxima-nova, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a {
          font-family: futura-pt-bold, sans-serif;
          line-height: 1;
          margin: 0;
        }

        .h-hide-for-large {
          @media (min-width: 768px) {
            display: none;
          }
        }

        .h-show-for-large {
          display: none;

          @media (min-width: 768px) {
            display: block;
          }
        }

        .slick-slider {
          margin-top: 30px;

          @media (min-width: 768px) {
            margin: 0;
          }
        }

        .slick-list {
          margin: 0 -20px;
          overflow: visible;
        }

        .slick-slide > div {
          margin: 0 20px;
        }

        .slick-dots {
          text-align: left;
        }

        .slick-dots li {
          width: 6px;
          height: 6px;
        }

        .slick-dots li button {
          width: 6px;
          height: 6px;
          padding: 0;
        }
        .slick-dots li button:before {
          width: 6px;
          height: 6px;
          color: #f48c24;
        }

        .slick-dots li.slick-active button:before {
          color: #f48c24;
        }

        .slick-prev {
          left: 3% !important;
          z-index: 1;
        }
        .slick-next {
          right: 3% !important;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
