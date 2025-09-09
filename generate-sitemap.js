import { SitemapStream } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";

const hostname = "https://artistkelle.com";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/gallery", changefreq: "weekly", priority: 0.7 },
  { url: "/contact-page", changefreq: "monthly", priority: 0.6 },
];

async function generateFiles() {
  // --- Generate sitemap.xml ---
  const sitemapStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream("./public/sitemap.xml", {
    encoding: "utf8",
  });

  sitemapStream.pipe(writeStream);

  // Add all links
  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  writeStream.on("finish", () => {
    console.log("✅ sitemap.xml created in /public");
  });

  // --- Generate robots.txt ---
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml
`;
  writeFileSync("./public/robots.txt", robotsTxt, { encoding: "utf8" });
  console.log("✅ robots.txt created in /public");
}

generateFiles();
