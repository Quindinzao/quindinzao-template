// External libraries
import styled from 'styled-components'

interface CardProps {
  width?: string
  minWidth?: string
  height?: string
  minHeight?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  background?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

export const Container = styled.div<CardProps>`
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};
  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-end-start-radius: ${props => props.borderBottomLeftRadius};
  border-end-end-radius: ${props => props.borderBottomRightRadius};
  border-start-start-radius: ${props => props.borderTopLeftRadius};
  border-start-end-radius: ${props => props.borderTopRightRadius};
`
