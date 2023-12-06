
import React from 'react';
import Blog from "@/components/Blog.js"; // Correct the import path
import bg1 from 'path/to/bg1'; // Import your images
import bg2 from 'path/to/bg2';
import bg3 from 'path/to/bg3';
import bg4 from 'path/to/bg4';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col from your UI library
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Row>
        {BlogData.map((blg) => (
          <Col sm="6" lg="6" xl="3" key={blg.title}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              description={blg.description} // Changed from text to description
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
      <Footer />
    </div>
  )
}


const BlogData = [
  {
    image: bg1,
    title: "Home Gardening",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Seasonal Produce",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Alternative Protein",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Pesticides and anti-monoculture",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
];
