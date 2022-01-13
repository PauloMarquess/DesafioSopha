import React, { useState } from 'react'
import { List } from '../../molecules/Collaborator/styled'
import { Container } from './styled'
import Modal from '../../molecules/Modal'

const TesteCalendar = ({ turno, activity, isActive }) => {
    const [visible, setVisible] = useState(false)
    const Over = () => {
        setVisible(true)
    }
    return (
        <List>
            <Container onClick={Over} isActive={isActive}>
                <span>{turno}</span>
                <p>{activity}</p>
            </Container>
            {visible && <Modal setVisible={setVisible} />}
        </List>
    )
}

export default TesteCalendar
