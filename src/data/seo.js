export const SITE_URL = "https://rotaract-website-chi.vercel.app/";

export const routes = {
  home: {
    path: "/",
    title: "Rotaract Club of Murang'a University | Leadership, Service & Impact",
    description:
      "Official website of the Rotaract Club of Murang'a University — empowering young leaders through community service, leadership development, fellowship, and impact.",
  },
  about: {
    path: "/about",
    title: "About Us | Rotaract Club of Murang'a University",
    description:
      "Learn about the mission, values, campus history, and community impact of the Rotaract Club of Murang'a University in Murang'a, Kenya.",
  },
  board: {
    path: "/board",
    title: "Club Leadership & Board | Rotaract Club of Murang'a University",
    description:
      "Meet the student leaders and directors stewarding the vision, service projects, and fellowship of the Rotaract Club of Murang'a University.",
  },
  projects: {
    path: "/projects",
    title: "Our Projects | Rotaract Club of Murang'a University",
    description:
      "Explore our community service, environmental conservation, health, education, and youth empowerment projects in Murang'a and beyond.",
  },
  events: {
    path: "/events",
    title: "Events & Calendar | Rotaract Club of Murang'a University",
    description:
      "View upcoming fellowship nights, induction ceremonies, community outreach events, and recent highlights from the Rotaract Club of Murang'a University.",
  },
  blog: {
    path: "/blog",
    title: "Stories & Blog | Rotaract Club of Murang'a University",
    description:
      "Read stories, updates, and reflections from the Rotaract Club of Murang'a University community.",
  },
  contact: {
    path: "/contact",
    title: "Contact & Join Us | Rotaract Club of Murang'a University",
    description:
      "Get in touch with the Rotaract Club of Murang'a University to join the club, attend a meeting, or partner on community service initiatives.",
  },
};

export function resolveSectionFromLocation(pathname, hash) {
  const normalizedPath = (pathname || "/").replace(/\/+$/, "") || "/";
  const pathMatch = Object.entries(routes).find(
    ([, route]) => route.path === normalizedPath,
  );
  if (pathMatch) return pathMatch[0];

  const hashSection = (hash || "").replace(/^#/, "");
  if (routes[hashSection]) return hashSection;

  return "home";
}
