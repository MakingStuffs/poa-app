import { gql } from "@apollo/client";
import { apolloClient } from "services";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage<{ restaurants: any }> = ({ restaurants }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {restaurants.map((r: any) => (
        <span key={r.id}>{r.name}</span>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query Restaurants {
        restaurants {
          id
          name
        }
      }
    `,
  });
  return {
    props: {
      restaurants: data.restaurants,
    },
  };
}

export default Home;
