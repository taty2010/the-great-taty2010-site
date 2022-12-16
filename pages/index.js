import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect, useState } from "react";
import FeedbackForm from "@components/FeedbackForm";

export default function Home({ data }) {
  const[ name, setName ] = useState("")
  useEffect(() => {
    setName(data.name)
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site. 
          {name}
        </p>
        {/* <FeedbackForm name={data.name}/> */}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.CONTEXT == "production" ? `${process.env.URL}/api/joke` : process.env.CONTEXT == "deploy-preview" ? `${process.env.DEPLOY_PRIME_URL}/api/joke` : 'http://localhost:8888/api/joke')
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}