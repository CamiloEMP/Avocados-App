import styled from 'styled-components'
import { colors, dark, light } from '../../theme'

export const StyledLink = styled.a`
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  border: 3px solid ${colors.primary};
  border-radius: 30px;
  cursor: pointer;
  padding: 8px;
  width: 200px;
  color: ${({ theme }) => theme === 'dark' ? dark.text : light.text};
  &:hover {
    transition: background 500ms ease;
    background-color: inherit;
    border: 1px solid green;
    color: #000000;
  }
`
