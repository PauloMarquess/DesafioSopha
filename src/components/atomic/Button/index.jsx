import React from 'react'
import { Container } from './styled'

const Button = ({ name, Icon, onClick,...props }) => {
    return (
        <Container>
            <button onClick={onClick} {...props}>
                <img src={Icon} /> {name}
            </button>
        </Container>
    )
}

export default Button
