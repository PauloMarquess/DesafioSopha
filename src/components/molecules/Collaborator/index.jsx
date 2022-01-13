import React from 'react'
import { Contributors } from '../../../constants/collaborator'
import TesteCalendar from '../../atomic/testCalendar'
import { List, Container } from './styled'

function Collaborator() {
    const Names = Contributors.map((collaborator) => {
        return (
            <div style={{ display: 'flex' }}>
                <List> {collaborator.name}</List>
                <TesteCalendar
                    turno="Manhã"
                    activity="nome,contrato"
                    isActive
                />
                <TesteCalendar />
                <TesteCalendar
                    turno="Manhã"
                    activity="nome,contrato"
                    isActive
                />
                <TesteCalendar
                    turno="12:00"
                    activity="nome,contrato"
                    isActive
                />
                <TesteCalendar />
                <TesteCalendar />
                <TesteCalendar
                    turno="12:00"
                    activity="nome,contrato"
                    isActive
                />
            </div>
        )
    })
    return <Container>{Names}</Container>
}

export default Collaborator
