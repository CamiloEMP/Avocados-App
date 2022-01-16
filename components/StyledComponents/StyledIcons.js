import styled, { css } from 'styled-components'

import {
  BsFillMoonStarsFill,
  BsSunFill,
  BsFillArrowUpCircleFill,
  BsLinkedin,
  BsInstagram
} from 'react-icons/bs'
import { SiStyledcomponents, SiNextdotjs, SiGithub } from 'react-icons/si'

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

export const IconInstagram = styled(BsInstagram)`
  ${SVG}
`

export const IconLinkedin = styled(BsLinkedin)`
  ${SVG}
`

export const IconGitHub = styled(SiGithub)`
  ${SVG}
`

export const IconStyledComp = styled(SiStyledcomponents)`
  font-size: 5rem;
`

export const IconNextJS = styled(SiNextdotjs)`
  font-size: 3rem;
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
