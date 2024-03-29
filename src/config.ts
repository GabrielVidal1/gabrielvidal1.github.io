import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
  home: {
    path: "/",
    title: "home",
  },
  project: {
    path: "/project",
    title: "projects",
  },
  blog: {
    path: "/blog",
    title: "blog",
  },
  archive: {
    path: "/archive",
    title: "archive",
  },
  about: {
    path: "/about",
    title: "about",
  },
  resume: {
    path: "https://resume.gabriel.vidal--ayrinhac.xyz/",
    title: "resume",
  },
};

export const SITE = {
  // Your site's detail?
  name: "Gabriel Vidal-Ayrinhac",
  title: "Gabriel Vidal-Ayrinhac Porfolio",
  // description: "Welcome to my personal website!",
  url: "https://blog.gabriel.vidal--ayrinhac.xyz/",
  githubUrl: "https://github.com/GabrielVidal1/gabrielvidal1.github.io",
  listDrafts: true,
  image: "",
  //   "https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
  // YT video channel Id (used in media.astro)
  ytChannelId: "",
  // Optional, user/author settings (example)
  // Author: name
  author: "Gabriel Vidal-Ayrinhac", // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: "", // Example: FredKSchott
  // Author: Image external source
  authorImage: "",
  //"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg,
  // Author: Bio
  authorBio: "Fullstack engineer, passionate about web and game development. Generative AI enthusiast.",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = false;
export const USE_SUBSCRIPTION =
  false; /* works only when USE_AUTHOR_CARD is true */
