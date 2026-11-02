type Theme = 'auto' | 'light' | 'dark'

// Light/dark theme for the landing page. Follows the system until the toggle picks a theme.
export function useLandingTheme() {
  const theme = useState<Theme>('landing-theme', () => 'auto')
  const prefersLight = useState('landing-prefers-light', () => false)

  const effectiveTheme = computed(() => theme.value === 'auto' ? (prefersLight.value ? 'light' : 'dark') : theme.value)
  const themeClass = computed(() => theme.value === 'auto' ? '' : theme.value)
  const themeLabel = computed(() => `Switch to ${effectiveTheme.value === 'light' ? 'dark' : 'light'} mode`)

  function toggleTheme() {
    theme.value = effectiveTheme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, prefersLight, effectiveTheme, themeClass, themeLabel, toggleTheme }
}

// Keeps the theme's "auto" mode in step with the system's light/dark setting. Call once per page.
export function useSystemColorScheme() {
  const { prefersLight } = useLandingTheme()
  let query: MediaQueryList | undefined
  const onChange = (e: MediaQueryListEvent) => { prefersLight.value = e.matches }

  onMounted(() => {
    query = window.matchMedia('(prefers-color-scheme: light)')
    prefersLight.value = query.matches
    query.addEventListener('change', onChange)
  })
  onBeforeUnmount(() => query?.removeEventListener('change', onChange))
}
