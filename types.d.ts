export interface MediaObject {
  url: string;
}

export type Environment = {
  API_URL: string;
};

export interface Restaurant {
  name: string;
  menus: [];
  slug: string;
  id: string;
  __typename: String;
}
