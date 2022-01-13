import styled from 'styled-components'
import { dark, light } from '../../theme'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
  padding: 20px 40px; 
  width: ${props => props.width ? props.width : '100%'};
  background-color: ${({ theme }) => theme === 'dark' ? `${light.body}` : `${dark.body}`};
  color: ${({ theme }) => theme === 'dark' ? `${light.text}` : `${dark.text}`};
  margin-bottom: ${({ marginb }) => marginb || '0px'};
`
