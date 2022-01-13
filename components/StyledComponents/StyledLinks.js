import styled from 'styled-components'
import { colors, dark, light } from '../../theme'

export const StyledLink = styled.a`
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  border: 3px solid ${colors.primary};
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  width: ${({ width }) => width || '200px'};
  background-color: inherit;
  color: ${({ theme }) => theme === 'dark' ? dark.text : light.text};
  &:hover {
    transition: background 300ms, color 300ms;
    background-color: ${colors.primary};
    color: ${({ theme }) => theme === 'dark' ? light.text : dark.text};
  }
`
