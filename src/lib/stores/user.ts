import { writable } from "svelte/store";

import { delay } from "$lib/utilities";
import type { AuthUser } from "$lib/types";
import { fetchLoggedInUser } from "$lib/services/user";

const initialUser: AuthUser | null = null;

function createUserStore() {
  const { subscribe, set } = writable(initialUser);

  let userData: AuthUser | null = null;

  // API to retrieve data for logged-in user
  const fakeFetchUser = async (): Promise<AuthUser | null> => {
    if (userData) return userData;

    try {
      userData = await fetchLoggedInUser();

      set(userData);
    } catch (error) {
      // TODO; let the user know about the error
      console.error("UserStore: getData", error);
    }

    return userData;
  };

  const fakeLogout = async(): Promise<void> => {
    userData = null;

    // insert POST request here
    await delay(200);
    set(userData);
  };

  return {
    subscribe,
    getData: fakeFetchUser,
    logout: fakeLogout,
  }
}

export default createUserStore();
