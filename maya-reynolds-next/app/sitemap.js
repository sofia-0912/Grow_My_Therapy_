const ROUTES = ["", "/services", "/about", "/faqs", "/contact"];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `https://www.example.com${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
