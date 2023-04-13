import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://correalm.vercel.app/",
  siteName: "correalm",
  siteDescription:
    "Blog to my notes",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "Sobre", href: "/about" },
  ],
  social: {
    github: "https://github.com/correalm",
    linkedin: "https://www.linkedin.com/in/correalm/",
  },
};
export default siteConfig;
