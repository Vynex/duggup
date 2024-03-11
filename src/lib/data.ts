import type { AuthUser, Profile, Timeline } from "./types";

export const USER_DATA: AuthUser = {
  id: 91201, slug: "krishna-kiran",
  fn: "Krishna", mn: "", ln: "Kiran",
  dp: "/images/avatar.jpg",
};

export const PROFILE_DATA: Profile = {
  id: 5831, slug: "krishna-kiran",
  bio: "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
  dp: "/images/avatar.jpg",
  fn: "Krishna", mn: "", ln: "Kiran",
  website: "https://www.krishnakiran.com/",
  following: true,

  work: {
    nm: "Duggup",
    id: 31511, slug: "duggup",
    title: "Co-Founder and CEO",
    dp: "/images/duggup.png",
    joined_ts: 1,
  },
};

export const TIMELINE_DATA: Timeline = {
  posts: [
    { id: 9120, created_ts: 1703097000000, img: "/images/posts/steve-jobs.jpeg", text: "No amount of technology can convert a bad story into a good story.", },
    { id: 9021, created_ts: 1701628200000, img: "/images/posts/sam-altman.jpeg", text: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.", },
    { id: 7249, created_ts: 1688754600000, img: "/images/posts/desk-setup.jpeg", text: "Startup Lesson I am reflecting. Don't build for the \"average person\".", },
    { id: 6041, created_ts: 1688236200000, img: "/images/posts/neo-tokyo.jpg", text: "Your biggest regrets at 80 will be acts of omission.", },
  ],

  experience: [
    { id: 591, slug: "duggup", nm: "Duggup", dp: "/images/duggup.png", title: "Co-Founder and CEO", location: "San Francisco Bay Area", shift: "Full-time", medium: "Remote", joined_ts: 1699036200000 },
    { id: 324, slug: "betterup", nm: "BetterUp", dp: "/images/better-up.png", title: "VP Engineering", location: "San Francisco Bay Area", shift: "Full-time", medium: "Remote", joined_ts: 1663353000000 },
  ],
};
