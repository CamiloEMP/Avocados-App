import Link from 'next/link'
import { Header } from './StyledComponents/StyledHeader'
import { TextWrapper } from './StyledComponents/StyledText'

export const NavBar = ({ children, theme }) => {
  return (
    <Header theme={theme}>
      <Link href="/">
        <TextWrapper
          as="a"
          style={{ cursor: 'pointer' }}
          color={theme}
          scaleFont="52px"
          fontSize="32px"
          bold="900"
        >
          RICK AND MORTY API
        </TextWrapper>
      </Link>
      {children}
    </Header>
  )
}
