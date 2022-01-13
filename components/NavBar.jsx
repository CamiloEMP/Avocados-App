import { Header } from './StyledComponents/StyledHeader'
import { TextWrapper } from './StyledComponents/StyledText'

export const NavBar = ({ children, theme }) => {
  return (
    <Header
      theme={theme}
    >
      <TextWrapper as='h1' scale='scale' fontSize='2rem' bold='900'>
        RICK AND MORTY API
      </TextWrapper>
      {children}
    </Header>
  )
}
