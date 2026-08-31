export const topLevelRoutes = [
  "/work",
  "/services",
  "/about",
  "/contact",
  "/trionn-story",
];

export const projectSlugs = [
  "8octa",
  "crowd-mouth",
  "dfz",
  "domus",
  "enterra-ai",
  "finora",
  "first-ground-coffee",
  "imusic",
  "loftloom",
  "myworker-ai",
  "novaglam",
  "One.Dot",
  "pulse-studio",
  "reelix",
  "revnet",
  "reyden",
  "shore",
  "stuffosome",
  "technis",
  "techno",
  "z1-flux-solar",
];

export const projectRoutes = projectSlugs.map((slug) => `/work/${slug}`);
export const syncRoutes = [...topLevelRoutes, ...projectRoutes];
export const staticRoutes = ["/", ...syncRoutes];

