import React from 'react'
import { Contributors } from '../../../constants/collaborator'
import TesteCalendar from '../../atomic/testCalendar'
import { List, Container, Table, StyleCollaborator } from './styled'

function Collaborator() {
  const Names = Contributors.map((collaborator) => {
    return (
      <Table>
        <StyleCollaborator> {collaborator.name}</StyleCollaborator>
        <TesteCalendar
          turno="Manhã"
          activity="- nome, contrato,endereço"
          isActive
        />
        <TesteCalendar />
        <TesteCalendar
          turno="12:00"
          activity="- nome, contrato,endereço"
          isActive
        />
        <TesteCalendar
          turno="Manhã"
          activity="- nome, contrato,endereço"
          isActive
        />
        <TesteCalendar />
        <TesteCalendar />
        <TesteCalendar
          turno="12:00"
          activity="- nome, contrato,endereço"
          isActive
        />
      </Table>
    )
  })
  return <Container>{Names}</Container>
}

export default Collaborator
