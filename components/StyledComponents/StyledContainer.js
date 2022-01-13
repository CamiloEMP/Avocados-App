import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-direction: ${({ fColumn }) => fColumn || null};
  width: ${({ width }) => width || '100%'};
  flex-wrap: ${({ wrap }) => wrap || null}; 
  padding: ${({ padding }) => padding || null};
`
