import fs from 'fs'
import { rewriteStaticPath } from '@js_dir/utils/sitemapUtils';
export default function SitemapPagesPage() {
}
export function getServerSideProps({ res, query }) {    
    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
      const staticPages = fs
                            .readdirSync("pages")
                            .filter((staticPage) => {
                                return [
                                   "index.js",
                                   "search.js",
                                   /*"bongda.js",
                                   "lichthidau.js",*/
                                ].includes(staticPage);
                            })
                            .map((staticPagePath) => {
                                const url = rewriteStaticPath(staticPagePath);
                                return `${baseUrl}/${url}`;
                            });
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <?xml-stylesheet type="text/xsl" href="/sitemap-stylesheet.xsl"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPages.map(url => {
                const now = new Date(),
                      d = now.toLocaleDateString('vi-VN');
                return `
                    <url>
                        <loc>${url}</loc>
                        <lastmod>${d}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>1.0</priority>
                    </url>
                `;
            }).join("")}
        </urlset>
      `;
      res.setHeader("Content-Type", "text/xml");
      res.write(sitemap);
      res.end();
      return {
        props: {},
      };
}