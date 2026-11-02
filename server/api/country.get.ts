// The visitor's country from Vercel's geo header, for usePrice. Never cached, so the page itself
// can be cached for everyone.
export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'private, no-store')
  return { country: getRequestHeader(event, 'x-vercel-ip-country')?.toUpperCase() ?? null }
})
