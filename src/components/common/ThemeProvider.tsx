import {
  Context,
  FunctionComponent,
  createContext,
  useEffect,
  useState,
} from 'react'

export const ThemeContext: Context<any> = createContext({})
type ThemeProps = {
  children: React.ReactNode
}

const isBrowser = typeof window !== 'undefined'

const ThemeProvider: FunctionComponent<ThemeProps> = function ({ children }) {
  const systemPrefers = isBrowser
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const osTheme = systemPrefers?.matches ? 'dark' : 'light'
    const userTheme = localStorage.getItem('color-theme')
    const theme = userTheme || osTheme
    if (theme === 'dark') {
      document.body.classList.add('dark')
      setIsDark(true)
    } else {
      document.body.classList.remove('dark')
      setIsDark(false)
    }
  }, [systemPrefers])

  const handleTheme = () => {
    setIsDark(prev => {
      if (!prev) {
        localStorage.setItem('color-theme', 'dark')
        document.body.classList.add('dark')
      } else {
        localStorage.setItem('color-theme', 'light')
        document.body.classList.remove('dark')
      }
      return !prev
    })
  }
  return (
    <ThemeContext.Provider value={{ isDark, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
