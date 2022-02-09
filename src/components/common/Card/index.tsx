// External libraries
import React, { ReactNode } from 'react'

// Styled
import {
  Container
} from './styles'

interface CardProps {
  children?: ReactNode

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

const Card: React.FC<CardProps> = ({
  children,
  width,
  minWidth,
  height,
  minHeight,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marignLeft,
  marginRight,
  background,
  border,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius
}) => {
  return (
    <Container
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      background={background}
      border={border}
      borderRadius={borderRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
    >
      {children}
    </Container>
  )
}

export default Card
