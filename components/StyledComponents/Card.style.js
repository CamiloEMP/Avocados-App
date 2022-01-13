import styled from 'styled-components'
import { colors } from '../../theme'

export const Card = styled.a`
  width: ${({ width }) => width};
  height: 500px;
  cursor: pointer;
  text-align: center;
  padding: 8px;
  margin: 40px 0;
  &:hover {
    border: 3px solid ${colors.secundary};
    border-radius: 6px;
    transform: scale(1.1);
    transition: transform 200ms ease;
  }
`
