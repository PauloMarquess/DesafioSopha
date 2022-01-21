import React from 'react'
import { Container } from './styled'

const Button = ({
  name,
  Icon,
  onClick,
  background,
  color,
  border,
  ...props
}) => {
  return (
    <Container>
      <button
        onClick={onClick}
        {...props}
        style={{ background, color, border }}
      >
        <img src={Icon} /> {name}
      </button>
    </Container>
  )
}

export default Button
