import { getTagLink } from '@js_dir/utils/tagUtils';
import { getSitemapTagsList } from '@lib/getSitemapTagsListApi';

export default function SitemapTagsPage() {
}

export async function getServerSideProps({ res, query }) {
    
      const staticTagPages = await getSitemapTagsList();
    
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <?xml-stylesheet type="text/xsl" href="/sitemap-stylesheet.xsl"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticTagPages.map(tag => {
                const now = new Date(),
                      d = now.toLocaleDateString('vi-VN');
                return `
                    <url>
                        <loc>${getTagLink(tag)}</loc>
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