import { IconMoon, IconSun } from './StyledComponents/StyledIcons'
import { toggleTheme } from '../constants/toogleTheme'
export const SwitchTheme = ({ theme, setTheme }) => {
  return (
    <>
      {theme === 'light'
        ? <IconMoon onClick={() => toggleTheme(theme, setTheme)} />
        : <IconSun onClick={() => toggleTheme(theme, setTheme)} />
      }
    </>
  )
}
