import { IconMoon, IconSun } from './StyledComponents/StyledIcons'

export const SwitchTheme = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      {theme === 'light'
        ? <IconMoon onClick={toggleTheme} />
        : <IconSun onClick={toggleTheme} />
      }
    </>
  )
}
