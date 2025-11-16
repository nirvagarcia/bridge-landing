export const dynamic = 'force-static';

export function GET(): Response {
  const robots = `User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://bridge.dev/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
