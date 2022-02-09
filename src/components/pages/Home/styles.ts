// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const AvatarContent = styled.div`
  width: 200px;
  height: 200px;

  margin-right: 51px;
`

export const Avatar = styled.div`
  width: 200px;
  height: 200px;

  background-color: ${theme.colors.gray_600};

  border-radius: 100px;
`

export const Column = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Grid = styled.div`
  width: 100%;

  margin-top: 51px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 51px;
`
