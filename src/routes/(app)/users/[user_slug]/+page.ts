import { fetchUserProfile, fetchUserTimeline } from "$lib/services/profile";
import { TimelineSection as TS, type Experience, type Post } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async function({ params }) {
  const profile = await fetchUserProfile(params.user_slug);
  const timeline = await fetchUserTimeline(params.user_slug);

  return { profile, timeline: processTimeline(timeline.posts, timeline.experience) };
}

/* Process User's Posts and Experience into Major/Minor Timeline Sections */
function processTimeline(posts: Array<Post>, experience: Array<Experience>):
  Array<{ type: TS, posts: Array<Post>, work: Experience }> {
  const allData: Array<{ type: TS, ts: number, post?: Post, exp?: Experience }> = [];

  posts.forEach((post) => {
    allData.push({ type: TS.Minor, ts: post.created_ts, post });
  });

  experience.forEach((exp) => {
    allData.push({ type: TS.Major, ts: exp.joined_ts, exp });
  });

  allData.sort((a, b) => b.ts - a.ts);
  const timelineData = new Map();

  allData.forEach((d) => {
    const dt = new Date(d.ts);
    dt.setDate(1);

    // Creating a Unique Key for Group Sort
    const mapKey = dt.getTime() + "_" + d.type;

    if (!timelineData.get(mapKey)) {
      timelineData.set(mapKey, { type: d.type, posts: [], work: {} });
    }

    if (d.type === TS.Major) timelineData.get(mapKey).work = d.exp;
    else timelineData.get(mapKey).posts.push(d.post);
  });

  return Array.from(timelineData.values());
}
