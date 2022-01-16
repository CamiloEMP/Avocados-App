import { useState, useEffect } from 'react'

import { Container } from '../../components/StyledComponents/StyledContainer'
import { CharacterCard } from '../../components/CharacterCard'
import { StyledLink } from '../../components/StyledComponents/StyledLinks'
import { IconRowUp } from '../../components/StyledComponents/StyledIcons'
import ScrollToTop from 'react-scroll-to-top'
import { Input } from '../../components/StyledComponents/Input.style'
import { defaultEndpoint } from '../../constants/API_URL'

export async function getServerSideProps () {
  const response = await fetch(defaultEndpoint)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

const characters = ({ data, theme }) => {
  const { info, results: defaultResults = [] } = data
  const [results, updateResults] = useState(defaultResults)

  const [page, setPage] = useState({
    ...info,
    current: defaultEndpoint
  })
  const { current } = page

  useEffect(() => {
    if (current === defaultEndpoint) return
    async function newRequest () {
      const response = await fetch(current)
      const nextData = await response.json()

      setPage({
        current,
        ...nextData.info
      })

      if (!nextData.info?.prev) {
        updateResults(nextData.results)
        return
      }

      updateResults((prev) => {
        return [...prev, ...nextData.results]
      })
      scrollBy(0, window.innerHeight - 100)
    }

    newRequest()
  }, [current])

  function handleNextPage () {
    setPage((prev) => {
      return {
        ...prev,
        current: page?.next
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { currentTarget = {} } = e
    console.log(currentTarget)
    const fields = Array.from(currentTarget?.elements)
    const fieldCharacter = fields.find((value) => value.name === 'character')
    const value = fieldCharacter.value || ''

    const endpoint = `${defaultEndpoint}?name=${value}`
    setPage({
      current: endpoint
    })
  }

  return (
    <>
      <Container as='section' margin='30px 0 0'>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <Input name="character" autoComplete="off" placeholder='Search a character ...' theme={theme} />
          <StyledLink width="150px" theme={theme} as="button" type="submit">
            Search
          </StyledLink>
        </form>
      </Container>
      <Container
        as="section"
        flexWrap="wrap"
        width="90%"
        margin="30px auto 0"
        gap="20px"
      >
        {results?.map((item) => (
          <CharacterCard theme={theme} key={item.id} item={item} />
        ))}
      </Container>
      <Container flexWrap="wrap" gap="15px" margin="0 0 30px" padding='0 0 15px'>
        {results && (
          <StyledLink onClick={handleNextPage} theme={theme} as="button">
          Ver más
          </StyledLink>
        )}
        <ScrollToTop className="button-up" smooth component={<IconRowUp />} />
      </Container>
    </>
  )
}

export default characters
