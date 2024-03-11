// Base Route; Fetch Logged-in User Details Here

import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import UserStore from "$lib/stores/user";

export async function load(): Promise<PageLoad> {
  // Get User's Logged-in state here
  // Redirect to Login Page if not authenticated

  await UserStore.getData();  // do something w/ the data

  // for now, redirect everyone to dummy profile page regardless
  redirect(302, "/users/krishna-kiran");
}
