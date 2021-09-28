import { gql, useQuery } from "@apollo/client";
import { Restaurant } from "types";

import { useRouter } from "next/router";

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
        <span key={r.id}>{r.name}</span>
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
      menus {
        name
        dishes {
          name
          price
        }
      }
    }
  }
`;

export default CountryRestaurants;
