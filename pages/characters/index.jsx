import { useEffect, useState } from 'react'

import { Container } from '../../components/StyledComponents/StyledContainer'
import { CharacterCard } from '../../components/CharacterCard'
import { StyledLink } from '../../components/StyledComponents/StyledLinks'

const characters = ({ theme }) => {
  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(41)

  useEffect(() => {
    async function getCharacters () {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      const data = await response.json()
      setCharacter(data.results)
    }
    getCharacters()
  }, [page])

  const handleNextPage = () => {
    console.log(page)
    if (page < 42) setPage(page + 1)
  }

  const handleBackPage = () => {
    if (page > 1) setPage(page - 1)
  }

  return (
    <div>
      <Container flexWrap="wrap" gap='15px' margin='60px 0 0 0'>
        <StyledLink onClick={handleBackPage} theme={theme} as="button">
          Pagina átras
        </StyledLink>
        <StyledLink onClick={handleNextPage} theme={theme} as="button">
          Siguiente pagina
        </StyledLink>
      </Container>
      <Container
        as="section"
        flexWrap="wrap"
        width="90%"
        margin="30px auto"
        gap="20px"
      >
        {character.map((item) => (
          <CharacterCard theme={theme} key={item.id} item={item} />
        ))}
      </Container>
    </div>
  )
}

export default characters
