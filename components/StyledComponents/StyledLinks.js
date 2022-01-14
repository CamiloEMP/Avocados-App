import styled from 'styled-components'
import { colors, dark, light } from '../../theme'

export const StyledLink = styled.a`
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  background-color: inherit;
  border: 3px solid ${colors.primary};
  width: ${({ width }) => width || '200px'};
  color: ${({ theme }) => theme === 'dark' ? dark.text : light.text};
  &:hover {
    transition: background 300ms, color 300ms;
    background-color: ${colors.primary};
    color: ${({ theme }) => theme === 'dark' ? light.text : dark.text};
  }
`
