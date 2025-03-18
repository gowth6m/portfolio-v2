import { MetadataRoute } from "next";

export const dynamic = 'force-static';

const baseUrl = process.env.NEXT_PUBLIC_METADATA_BASE || 'http://gowtham.co.uk';

const routes: { url: string, priority: number }[] = [
    { url: '/', priority: 1 },
    { url: '/projects', priority: 0.9 },
    { url: '/experience', priority: 0.9 },
    { url: '/404', priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        priority: route.priority
    }));
}
