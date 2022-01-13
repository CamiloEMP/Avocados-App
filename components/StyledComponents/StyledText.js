import styled from 'styled-components'

export const TextWrapper = styled.p`
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: ${({ bold }) => bold || 'normal'};
  @media only screen and (min-width: 768px) {
    ${({ scale }) => scale === 'scale' ? 'font-size: 52px' : 'font-size: 35px'}
  }
`
