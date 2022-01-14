export const toggleTheme = (theme, setTheme) => {
  theme === 'light' ? setTheme('dark') : setTheme('light')
}
