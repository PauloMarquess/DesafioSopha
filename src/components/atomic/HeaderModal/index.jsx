import React from 'react'
import Icon from '../../../assets/img/settings.svg'
import { Container } from './styled'

const HeaderModal = () => {
  return (
    <Container>
      <p>
        <img src={Icon} />
        &nbsp; Montagem
      </p>
      <h5>Pendente</h5>
      <div>
        <p>Qua - Tarde</p>
        <p>10/11/2021</p>
      </div>
    </Container>
  )
}

export default HeaderModal
