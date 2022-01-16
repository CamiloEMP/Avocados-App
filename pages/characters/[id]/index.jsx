import Image from 'next/image'
import Link from 'next/link'
import { defaultEndpoint } from '../../../constants/API_URL'

import { Container } from '../../../components/StyledComponents/StyledContainer'
import { StyledLink } from '../../../components/StyledComponents/StyledLinks'
import { TextWrapper } from '../../../components/StyledComponents/StyledText'

export async function getServerSideProps ({ query }) {
  const { id } = query
  const response = await fetch(`${defaultEndpoint}${id}`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

const Character = ({ data, theme }) => {
  console.log(data)
  const { name, status, species, gender, image, location, episode } = data
  return (
    <>
      <Container width="90%" padding="30px 0 0" height="60%" flexWrap="wrap" margin='0 auto'>
        <Image src={image} width={300} height={300} alt={`image ${name}`} />
        <Container width="400px" column="column" padding='80px 0 0'>
          <TextWrapper color={theme}>
            <strong>Name:</strong> {name}
          </TextWrapper>
          <TextWrapper color={theme}>
            <strong>Status:</strong> {status}
          </TextWrapper>
          <TextWrapper color={theme}>
            <strong>Species:</strong> {species}
          </TextWrapper>
          <TextWrapper color={theme}>
            <strong>Gender:</strong> {gender}
          </TextWrapper>
          <TextWrapper color={theme}>
            <strong>Location:</strong> {location.name}
          </TextWrapper>
          <TextWrapper color={theme}>
            <strong>Episodes:</strong> Appears in {episode.length} episodes
          </TextWrapper>
          <Link href="/characters">
            <StyledLink style={{ margin: '10px 0 20px' }} theme={theme}>Go back</StyledLink>
          </Link>
        </Container>

      </Container>
    </>
  )
}

export default Character
