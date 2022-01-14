import Link from 'next/link'

import { Container } from '../components/StyledComponents/StyledContainer'
import { TextWrapper } from '../components/StyledComponents/StyledText'
import { StyledLink } from '../components/StyledComponents/StyledLinks'

export default function Home ({ theme }) {
  return (
    <>
      <Container as='main' column='column' height='400px' padding='20px 40px 0'>
        <TextWrapper color={theme} as='h3' bold='700' fontSize='24px' scaleFont='38px'>
          Developer by Camilo Mora
        </TextWrapper>
        <Container column='column' gap='20px'>
          <Link href='/contact'>
            <StyledLink width='240px' theme={theme}>Contact me</StyledLink>
          </Link>
          <Link href='/characters'>
            <StyledLink className='caa' width='240px' theme={theme}>Watch Characters</StyledLink>
          </Link>
        </Container>
      </Container>
    </>
  )
}
