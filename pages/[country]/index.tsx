import { gql, useQuery } from "@apollo/client";
import { Restaurant } from "types";

import { useRouter } from "next/router";
import Link from "next/link";
const CountryRestaurants: React.FC = ({ children }) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANTS, {
    variables: { country: router.query.country || "de" },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error loading restaurants</h1>;

  return (
    <div>
      {data.restaurants.map((r: Restaurant) => (
        <Link key={r.id} href={`${router.query.country}/${r.slug}`}>
          {r.name}
        </Link>
      ))}
    </div>
  );
};

const GET_RESTAURANTS = gql`
  query ($country: String!) {
    restaurants(where: { country: $country }) {
      name
      id
      slug
    }
  }
`;

export default CountryRestaurants;
