import { AuthenticationState, User } from "types";

const initialState: AuthenticationState = {
  isAuthenticated: false,
  setUser: () => {},
  user: null,
};

export default initialState;
