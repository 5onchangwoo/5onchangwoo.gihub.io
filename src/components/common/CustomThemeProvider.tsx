import {
  Context,
  FunctionComponent,
  createContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from '@emotion/react'

export let ThemeContext: Context<any> = createContext({
  isDark: '',
  setIsDark: () => {},
})
type ThemeProps = {
  children: React.ReactNode
}

const isBrowser = typeof window !== 'undefined'

const CustomThemeProvider: FunctionComponent<ThemeProps> = function ({
  children,
}) {
  const systemPrefers = isBrowser
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const osTheme = systemPrefers?.matches ? 'dark' : 'light'
    const userTheme = localStorage.getItem('color-theme')
    const resultTheme = userTheme || osTheme
    if (resultTheme === 'dark') {
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

  const theme = {
    isDark: isDark,
  }
  return (
    <ThemeContext.Provider value={{ isDark, handleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
