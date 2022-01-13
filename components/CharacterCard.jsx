import Link from 'next/link'
import Image from 'next/image'

import { Card } from './StyledComponents/Card.style'
import { TextWrapper } from './StyledComponents/StyledText'
import { colors } from '../theme'

export const CharacterCard = ({ item, theme }) => {
  const { name, species, status, location, image } = item
  return (
    <Link href="/">
      <Card width="340px">
        <TextWrapper
          color={colors.primary}
          as="h3"
          bold="900"
          fontSize="30px"
          margin="0 0 15px"
        >
          {name}
        </TextWrapper>
        <Image src={image} width={300} height={300} preload="true" />
        <TextWrapper
          as="div"
          display="flex"
          textAlign="initial"
          bold="900"
          margin="5px 0 0 10px"
          color={colors.secundary}
        >
          Especie:
          <TextWrapper colorTheme={theme} margin="0 0 0 8px" bold="700">
            {species}
          </TextWrapper>
        </TextWrapper>
        <TextWrapper
          as="div"
          display="flex"
          textAlign="initial"
          bold="900"
          margin="5px 0 0 10px"
          color={colors.secundary}
        >
          Estado:
          <TextWrapper colorTheme={theme} margin="0 0 0 8px" bold="700">
            {status}
          </TextWrapper>
        </TextWrapper>
        <TextWrapper
          as="div"
          display="flex"
          textAlign="initial"
          margin="5px 0 0 10px"
          bold="900"
          color={colors.secundary}
        >
          Localización:
          <TextWrapper colorTheme={theme} margin="0 0 0 8px" bold="700">
            {location.name}
          </TextWrapper>
        </TextWrapper>
      </Card>
    </Link>
  )
}
