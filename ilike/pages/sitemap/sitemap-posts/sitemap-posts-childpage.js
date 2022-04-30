import { getArticleFullLink } from "@js_dir/utils/articleUtils";
import { getImageUrlFromAmazonS3 } from "@js_dir/utils/imageUtils";
import { getSitemapPostsList } from "@lib/getSitemapPostsListApi";
export default function SitemapPostsChildPage() {
}
export async function getServerSideProps({ res, query }) {
    const piece = query.slug.split('-').pop();
    const page = piece.substr(1, piece.length - 5);
    const staticPostsList = await getSitemapPostsList(page);
    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
      //fs.writeFile('data.json', JSON.stringify(staticPostsList));
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <?xml-stylesheet type="text/xsl" href="/sitemap-stylesheet.xsl"?>
        <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
                 xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" 
                 xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPostsList.map(post => {
                const {image = ''} = post;
                const now = new Date(),
                      d = now.toLocaleDateString('vi-VN');
                const imageUrl = getImageUrlFromAmazonS3(image);
                return `
                    <url>
                        <loc>${getArticleFullLink(post)}</loc>
                        <lastmod>${d}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>1.0</priority>
                        ${image ? `
                            <image:image>
                                <image:loc>${imageUrl}</image:loc>
                            </image:image>` : ''}
                        <parentloc>${baseUrl}/sitemap/sitemap-posts.xml</parentloc>
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