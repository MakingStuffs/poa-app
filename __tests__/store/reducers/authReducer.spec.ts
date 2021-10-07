import { authReducer, authInitialState, setUser, clearUser } from "store";
import { User } from "types";

const loggedInState: User = {
  isActive: true,
  blocked: false,
  username: null,
  registrationToken: null,
  firstname: "Jim",
  lastname: "Jo",
  email: "EXAMPLE@makingstuffs.co.uk",
  roles: [
    {
      id: "afadsfaf",
      name: "Super Admin",
      description:
        "Super Admins can access and manage all features and settings.",
      code: "strapi-super-admin",
    },
  ],
};

describe("authReducer", () => {
  it("sets user data and sets isAuthenticated to true", () => {
    const newState = authReducer(authInitialState, setUser(loggedInState));
    expect(newState.user).toEqual(loggedInState);
    expect(newState.isAuthenticated).toBe(true);
  });

  it("clears user data and sets isAuthenticated to false", () => {
    const newState = authReducer(
      { isAuthenticated: true, user: loggedInState },
      clearUser()
    );
  });
});
