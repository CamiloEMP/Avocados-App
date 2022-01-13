import Link from 'next/link'

import { Container } from '../components/StyledComponents/StyledContainer'
import { TextWrapper } from '../components/StyledComponents/StyledText'
import { StyledLink } from '../components/StyledComponents/StyledLinks'

export default function Home ({ theme }) {
  console.log(theme)
  return (
    <>
      <Container as='main' padding='50px 40px 0' fColumn='column'>
        <TextWrapper as='h3' scale='h3' fontSize='24px' bold='700'>
          Developer by Camilo Mora
        </TextWrapper>
        <Container wrap='wrap' width='350px'>
          <Link href='/contact'>
            <StyledLink theme={theme}>Contact me</StyledLink>
          </Link>
          <Link href='/contact'>
            <StyledLink theme={theme}>Watch Project</StyledLink>
          </Link>
        </Container>
      </Container>
    </>
  )
}
