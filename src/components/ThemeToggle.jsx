import { useTheme } from '../hooks/useTheme'

function SunIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
}
function MoonIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 14.5A8 8 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" /></svg>
}
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return <button type="button" className="grid size-[46px] cursor-pointer place-items-center border border-ink bg-transparent text-ink transition-colors hover:bg-ink hover:text-paper motion-reduce:transition-none" onClick={toggleTheme} aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'} title={isDark ? 'Thème clair' : 'Thème sombre'}>{isDark ? <SunIcon /> : <MoonIcon />}</button>
}
