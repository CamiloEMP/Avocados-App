import styled from 'styled-components'
import { dark, light, colors } from '../../theme'

export const Input = styled.input`
  font-size: 20px;
  font-family: inherit;
  font-weight: 700;
  padding: 9px 4px 9px 14px;
  margin: 0 20px 20px 0;
  border-radius: 4px;
  border: 2px solid ${colors.secundary};
  outline: none;
  background-color: inherit;
  color: ${({ theme }) => theme === 'dark' ? dark.text : light.text};
  &:focus {
    border: 2px solid ${colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme === 'dark' ? light.body : dark.body};
    font-weight: 400;
    opacity: .8;
  }

`
