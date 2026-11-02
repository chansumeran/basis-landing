// robots.txt, served from code so the Sitemap line can carry the site's absolute URL.
export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return ['User-agent: *', 'Allow: /', ...(siteUrl ? ['', `Sitemap: ${siteUrl}/sitemap.xml`] : [])].join('\n') + '\n'
})
