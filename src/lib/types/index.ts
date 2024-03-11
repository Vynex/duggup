type User = {
  id: number;        // Unique Identifer
  slug: string;      // Slug or Username
  fn: string;        // First Name
  mn?: string;       // Middle Name
  ln?: string;       // Last Name
  dp?: string;       // Display Picture
}

// Interface for Logged-in User
export interface AuthUser extends User {
  token?: string;     // Authentication token
  loginTs?: number;   // TS of when the user logged in
  expiryTs?: number;  // TS for user's session expiry
}

// Not Implemented
type ProfileLink = {
  type: string;       // Can be any Social media profile, GitHub profile, Linktree, Patreon, etc.
  link: string;       // Actual URL of the webpage
};

type Company = {
  id: number;           // Unique Identifier
  nm: string;           // Registered Name of Company
  dp: string;           // Display Picture
  slug: string;         // Slug for URLs
  location?: string;    // Location of Company
};

export interface Experience extends Company {
  title: string;        // User's Role in Organization
  joined_ts: number;    // Timestamp for Date of Joining
  medium?: string;       // Remote or In-office
  shift?: string;        // Full-time, Part-time etc.
}

export interface Profile extends User {
  bio: string;           // User-added Short Biography
  following: boolean;    // Whether AuthUser follows this Profile

  website?: string;       // Link to Profile's Website
  links?: Array<ProfileLink>;

  work?: Experience;      // TODO; Extend to include Freelance, Students, etc.
}

export interface Post {
  id: number;             // Unique Identifier
  created_ts: number;     // Timestamp for when the post was made
  text?: string;          // Text Body of the Psot
  img?: string;           // TODO; Extend to include multiple post types, multiple medias, etc.
}

export type Timeline = {
  posts: Array<Post>;
  experience: Array<Experience>;
};

export enum TimelineSection { Major, Minor }