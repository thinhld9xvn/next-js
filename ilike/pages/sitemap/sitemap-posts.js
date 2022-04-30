import { SITEMAP_DEF_NUM } from "@constants/constants";
import { getSitemapPostsListCount } from "@lib/getSitemapPostsListCountApi";
export default function SitemapPagesPage() {
}
export async function getServerSideProps({ res, query }) {
    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
      const sitemapsTotal = await getSitemapPostsListCount();
      //const sitemapsStaticLocal = await getSitemapPostsList(DEFAULT_PAGE, SITEMAP_DEF_NUM, false);
      const n = Math.floor(sitemapsTotal / SITEMAP_DEF_NUM);
      const k = sitemapsTotal % SITEMAP_DEF_NUM;
      const totalPage = k > 0 ? n + 1 : n;
      let sitemapxml = '';
      for ( let i = 1; i <= totalPage; i++ ) {
            const now = new Date(),
                  d = now.toLocaleDateString('vi-VN');
            const sitemapUrl = `sitemap/sitemap-posts-p${i}.xml`;
            sitemapxml += `
                <sitemap>
                    <loc>${baseUrl}/${sitemapUrl}</loc>
                    <lastmod>${d}</lastmod>
                    <parentloc>${baseUrl}/sitemap.xml</parentloc>
                </sitemap>
            `;
      }
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <?xml-stylesheet type="text/xsl" href="/sitemap-stylesheet.xsl"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemapxml}    
        </sitemapindex>
      `;
      res.setHeader("Content-Type", "text/xml");
      res.write(sitemap);
      res.end();
      return {
        props: {},
      };
}