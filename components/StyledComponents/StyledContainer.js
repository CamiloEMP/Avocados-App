import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ column }) => column};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => gap};
`
