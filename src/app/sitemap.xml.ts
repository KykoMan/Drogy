// dynamically generate a simple sitemap for all the routes we know about
const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "localhost:3000";
const siteUrl = (deploymentUrl.startsWith("http") ? deploymentUrl : `https://${deploymentUrl}`).replace(/\/+$/, "");

export default function sitemap() {
  const staticPages = ["", "aboutUs", "prevention", "drugs", "contact"];
  const drugIds = [1, 2, 3, 4]; // keep in sync with hardcoded data in /app/drugs

  const urls = staticPages
    .map((p) => `<url><loc>${siteUrl}/${p}</loc></url>`)
    .join("\n");
  const drugUrls = drugIds
    .map((id) => `<url><loc>${siteUrl}/drugs/${id}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${drugUrls}
</urlset>`;
}

// build-time/static output
export const dynamic = "force-static";
