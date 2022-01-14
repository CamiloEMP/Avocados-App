import styled, { css } from 'styled-components'
import { BsFillMoonStarsFill, BsSunFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import { colors } from '../../theme'

const SVG = css`
  font-size: 3rem;
  cursor: pointer;
`

export const IconMoon = styled(BsFillMoonStarsFill)`
  ${SVG}
`

export const IconSun = styled(BsSunFill)`
  ${SVG}
`

export const IconRowUp = styled(BsFillArrowUpCircleFill)`
  ${SVG};
  position: fixed;
  bottom: 26px;
  right: 18px;
  color: ${colors.primary};
  &:hover {
    color: ${colors.secundary};
  }
`
