// Module for authentication related stuff;

import { delay } from "$lib/utilities";
import type { AuthUser } from "$lib/types";
import { USER_DATA } from "$lib/data";

// Fetch Data for Logged-in User
export async function fetchLoggedInUser(): Promise<AuthUser> {
  // <insert API here>
  await delay(200);

  return USER_DATA;
}
