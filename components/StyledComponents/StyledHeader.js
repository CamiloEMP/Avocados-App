import styled from 'styled-components'
import { dark, light } from '../../theme'
// ${({ theme }) => theme === 'dark' ? `${light.body}` : `${dark.body}`}
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
  padding: 0 40px; 
  width: ${props => props.width ? props.width : '100%'};
  background-color: ${({ theme }) => theme === 'dark' ? `${light.body}` : `${dark.body}`};
  color: ${({ theme }) => theme === 'dark' ? `${light.text}` : `${dark.text}`};
  margin-bottom: ${({ marginb }) => marginb || '0px'};
`
