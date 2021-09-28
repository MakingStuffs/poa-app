import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const RestaurantPage: React.FC = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery(GET_MENUS, {
    variables: { slug: router.query.restaurant },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error loading restaurants</h1>;
  return <h1>{data.restaurants[0].name}</h1>;
};

const GET_MENUS = gql`
  query restaurant($slug: String!) {
    restaurants(where: { slug: $slug }) {
      name
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

export default RestaurantPage;
