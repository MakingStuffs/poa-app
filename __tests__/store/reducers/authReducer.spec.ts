import { AnyAction } from "redux";
import { authReducer, authInitialState, setUser } from "store";
import { User } from "types";
import { render, screen } from "utils/testing/testHelpers";

describe("authReducer", () => {
  it("can log a user in", () => {
    const newState = authReducer(
      authInitialState,
      setUser({
        firstName: "John",
        lastName: "John",
      } as User)
    );

    expect(newState.user?.firstName).toBe("John");
    expect(newState.user?.lastName).toBe("John");
  });
});
