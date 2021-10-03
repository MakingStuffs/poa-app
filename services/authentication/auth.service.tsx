import { env } from "utils";
import axios from "axios";
import Cookie from "js-cookie";
import router from "next/router";
import { useEffect } from "react";
import { NextPage } from "next";

export const registerUser = (
  username: string,
  email: string,
  password: string
) => {
  // Make sure this only runs on the client
  if (typeof window === "undefined") {
    return;
  }
  // Return a promise which resolves to the registration response from the server
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.post(`${env.API_URL}/auth/local/register`, {
        username,
        email,
        password,
      });
      const response = await request.data;
      // set our login cookie
      Cookie.set("token", response.jwt);
      // Resolve with our response object
      resolve(response);
      // Redirect home
      router.push("/");
    } catch (e) {
      // If there was an error reject the promise
      reject(e);
    }
  });
};

export const login = (identifier: string, password: string) => {
  // Make sure this only runs on the client
  if (typeof window === "undefined") {
    return;
  }
  return new Promise(async (resolve, reject) => {
    try {
      // Make our request to auth server
      const request = await axios.post(`${env.API_URL}/auth/local`, {
        identifier,
        password,
      });
      // Get the response
      const response = await request.data;
      // set our login cookie
      Cookie.set("token", response.jwt);
      // Resolve it
      resolve(response);
      // Go back home
      router.push("/");
    } catch (e) {
      // Reject in the case of error
      reject(e);
    }
  });
};

export const logout = () => {
  // Remove the cookie from client
  Cookie.remove("token");
  // Sync all windows
  window.localStorage.setItem("logout", `${Date.now()}`);
  // Go back home
  router.push("/home");
};

export const withAuthSync = (Component: NextPage) => {
  // Define a wrapper component
  const Wrapper: NextPage = (props) => {
    // Function to sync logout
    const syncLogout = (event: any) => {
      // If the event is a logout
      if (event.key === "logout") {
        // Return to login
        router.push("/login");
      }
    };
    // UseEffect to update when the local storage is accessed
    useEffect(() => {
      // Listen for the storage event
      window.addEventListener("storage", syncLogout);
      return () => {
        // Remove our event listener
        window.removeEventListener("storage", syncLogout);
        // Remove our logout item to sync all tabs
        window.localStorage.removeItem("logout");
      };
    }, []);
    // Return the original component
    return <Component {...props} />;
  };

  // If the component is reliant on initial props, get them
  if (Component.getInitialProps) {
    // If so pass them to our wrapper
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};
