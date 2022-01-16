import Link from 'next/link'

import { StyledLink } from '../components/StyledComponents/StyledLinks'
import { Container } from '../components/StyledComponents/StyledContainer'
import {
  IconInstagram,
  IconLinkedin,
  IconNextJS,
  IconStyledComp,
  IconGitHub
} from '../components/StyledComponents/StyledIcons'
import { TextWrapper } from '../components/StyledComponents/StyledText'

const contact = ({ theme }) => {
  return (
    <Container
      as="section"
      height="85%"
      column="column"
      gap="50px"
      width="80%"
      margin="0 auto"
    >
      <Container column="column">
        <TextWrapper bold='700' color={theme} fontSize="28px" textAlign='center'>
          In this page, I practice NextJS and Styled Components with the API of Rick and Morty
        </TextWrapper>
        <Container gap="30px">
          <IconNextJS />
          <IconStyledComp />
        </Container>
      </Container>
      <Container gap="30px" flexWrap='wrap'>
        <TextWrapper bold='700' color={theme} fontSize="28px">
          Me puedes encontrar en
        </TextWrapper>
        <Link href="https://www.linkedin.com/in/camilo-mora/">
          <a target="_blank">
            <IconLinkedin />
          </a>
        </Link>
        <Link href="https://www.instagram.com/camilo___e/">
          <a target="_blank">
            <IconInstagram />
          </a>
        </Link>
        <TextWrapper bold='700' color={theme} fontSize="28px">
          and this is the repository
        </TextWrapper>
        <Link href="https://github.com/CamiloEMP/rick-morty-api">
          <a target="_blank">
            <IconGitHub />
          </a>
        </Link>
      </Container>
      <Link href="/">
        <StyledLink theme={theme}>Home</StyledLink>
      </Link>
    </Container>
  )
}

export default contact
