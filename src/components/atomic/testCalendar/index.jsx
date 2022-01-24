import React, { useState } from 'react'
import { List } from '../../molecules/Collaborator/styled'
import { Activity, Container } from './styled'
import Modal from '../../molecules/Modal'

const TesteCalendar = ({ turno, activity, isActive }) => {
  const [visible, setVisible] = useState(false)
  const Over = () => {
    setVisible(true)
  }
  return (
    <List>
      <Container onClick={Over} isActive={isActive}>
        <Activity>
          <p>
            <span>{turno}</span>
            {activity}
          </p>
        </Activity>
      </Container>
      {visible && <Modal setVisible={setVisible} />}
    </List>
  )
}

export default TesteCalendar
