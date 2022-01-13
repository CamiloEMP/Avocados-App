import { Header } from './StyledComponents/StyledHeader'
import { TextWrapper } from './StyledComponents/StyledText'

export const NavBar = ({ children, theme }) => {
  return (
    <Header theme={theme}>
      <TextWrapper color={theme} as='h1' scaleFont='52px' fontSize='32px' bold='900'>
        RICK AND MORTY API
      </TextWrapper>
      {children}
    </Header>
  )
}
