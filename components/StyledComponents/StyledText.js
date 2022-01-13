import styled from 'styled-components'
import { dark, light } from '../../theme'

export const TextWrapper = styled.p`
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: ${({ bold }) => bold || 'normal'};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, colorTheme }) => color || (colorTheme === 'dark' ? dark.text : light.text)};
  @media only screen and (min-width: 768px) {
    font-size: ${({ scaleFont }) => scaleFont}
  }
`
