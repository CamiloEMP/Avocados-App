import Image from 'next/image'
import { Container } from '../../../components/StyledComponents/StyledContainer'
import { TextWrapper } from '../../../components/StyledComponents/StyledText'
import { defaultEndpoint } from '../../../constants/API_URL'

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
  const { name, status, species, gender, image, location } = data
  return (
    <Container>
      <div>
        <Image src={image} width={350} height={350} alt={`image ${name}`} />
      </div>
      <Container column='column'>
        <TextWrapper color={theme}>Name: {name}</TextWrapper>
        <TextWrapper color={theme}>Status: {status}</TextWrapper>
        <TextWrapper color={theme}>Species: {species}</TextWrapper>
        <TextWrapper color={theme}>Gender: {gender}</TextWrapper>
        <TextWrapper color={theme}>Location: {location.name}</TextWrapper>
      </Container>
    </Container>
  )
}

export default Character
