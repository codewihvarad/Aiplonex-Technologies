import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Define your routes here
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 }
];

async function generateSitemap() {
    try {
        const sitemap = new SitemapStream({ hostname: 'https://aiplonex.com' });
        const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

        sitemap.pipe(writeStream);

        links.forEach(link => sitemap.write(link));

        sitemap.end();

        await streamToPromise(sitemap);
        console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
    }
}

generateSitemap();
