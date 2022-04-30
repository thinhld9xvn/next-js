import { getCategoryLink } from '@js_dir/utils/categoriesUtils';
import { getSitemapCategoriesList } from '@lib/getSitemapCategoriesListApi';
export default function SitemapCategoriesPage() {
}
export async function getServerSideProps({ res, query }) { 
      const staticCatPages = await getSitemapCategoriesList();
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <?xml-stylesheet type="text/xsl" href="/sitemap-stylesheet.xsl"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticCatPages.map(cat => {
                const now = new Date(),
                      d = now.toLocaleDateString('vi-VN'),
                      link = getCategoryLink(cat);
                return `
                    <url>
                        <loc>${link}</loc>
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