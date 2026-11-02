import { prices } from '~/utils/landing'

// The app's price for the visitor: pesos in the Philippines, dollars everywhere else. The page
// always renders the dollar price, so every visitor gets the same HTML and a CDN can cache it.
// After it loads, /api/country reports the country from Vercel's geo header. Without it (local
// dev, where there's no Vercel), the browser's time zone decides.
export function usePrice() {
  const country = useState<string | null>('visitor-country', () => null)

  onMounted(async () => {
    if (country.value) return
    const res = await $fetch<{ country: string | null }>('/api/country').catch(() => null)
    country.value = res?.country
      ?? (Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Manila' ? 'PH' : null)
  })

  return computed(() => country.value === 'PH' ? prices.ph : prices.default)
}
