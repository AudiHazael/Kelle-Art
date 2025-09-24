import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const siteUrl = "https://www.artistkelle.com"; // your real domain

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });

  // List of all routes in your portfolio site
  const pages = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/services", changefreq: "monthly", priority: 0.8 },
    { url: "/gallery", changefreq: "weekly", priority: 0.7 },
    { url: "/contact", changefreq: "monthly", priority: 0.6 },
  ];

  pages.forEach((page) => sitemap.write(page));
  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  createWriteStream("./public/sitemap.xml").write(sitemapOutput.toString());
}

generateSitemap()
  .then(() => console.log("✅ Sitemap generated successfully!"))
  .catch((err) => console.error("❌ Error generating sitemap:", err));
