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

export interface AuthenticationState {
  isAuthenticated: boolean;
  setUser: (identifier: string, password: string) => Promise;
  user: User | null;
}

export interface User {
  isActive: boolean;
  blocked: boolean;
  username: null | string;
  registrationToken: null | string;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
}

export interface UserRole {
  id: string;
  name: string;
  description: string;
  code: string;
}
