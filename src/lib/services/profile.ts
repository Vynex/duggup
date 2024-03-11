// Module related to a User's profile

import { delay } from "$lib/utilities";
import type { Profile, Timeline } from "$lib/types";
import { PROFILE_DATA, TIMELINE_DATA } from "$lib/data";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function fetchUserProfile(user_slug: string): Promise<Profile> {
  // <insert API here>
  await delay(200);

  return PROFILE_DATA;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function fetchUserTimeline(user_slug: string): Promise<Timeline> {
  // <insert API here>
  await delay(200);

  return TIMELINE_DATA;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function followUser(user_id: number): Promise<void> {
  // <insert API here>
  await delay(200);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function unfollowUser(user_id: number): Promise<void> {
  // <insert API here>
  await delay(200);
}
