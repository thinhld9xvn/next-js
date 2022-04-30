const sitemapsStaticLocal = [    
    "sitemap-pages.xml",
    "sitemap-posts.xml",
    "sitemap-categories.xml",
    "sitemap-tags.xml",
]

export default function SitemapPage() {
}

export function getServerSideProps({ res }) {

    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
    
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                        <?xml-stylesheet type="text/xsl" href="/sitemap-stylesheet.xsl"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemapsStaticLocal.map(sitemapUrl => {
                const now = new Date(),
                      d = now.toLocaleDateString('vi-VN');
                return `
                    <sitemap>
                        <loc>${baseUrl}/sitemap/${sitemapUrl}</loc>
                        <lastmod>${d}</lastmod>
                    </sitemap>
                `;
            }).join("")}
        </sitemapindex>
      `;
    
      res.setHeader("Content-Type", "text/xml");
      res.write(sitemap);
      res.end();
    
      return {
        props: {},
      };

}