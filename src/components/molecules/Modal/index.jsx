import React, { useState } from 'react'
import Button from '../../atomic/Button'
import { BtnClose, Card, CardButton, Container } from './styled'
import Location from '../../../assets/img/location.svg'
import HeaderModal from '../../atomic/HeaderModal'

const Modal = ({ setVisible }) => {
  const handleClose = () => {
    setVisible(false)
  }
  return (
    <Container>
      <BtnClose>
        <Button name="X" onClick={handleClose} />
      </BtnClose>
      <HeaderModal />
      <Card>
        <h4>Nome do cliente</h4>
        <p>Número do contrato</p>
      </Card>
      <div style={{ display: 'flex', marginLeft: '20px' }}>
        <img src={Location} />
        <Card>
          <h4>Endereço</h4>
          <p>Bairro - cidade</p>
        </Card>
      </div>
      <Card>
        <p>Quantidade de ambiente: 7</p>
        <p>Valor do investimento: R$ 85.000,00</p>
      </Card>
      <Card>
        <p>Observações:</p>
        <p>Levar ferramentas extras, e falar com o zelador </p>
      </Card>
      <CardButton>
        <Button
          name="Editar"
          background="#fff"
          color="#000"
          border="#ababab 2px solid"
        />
        <Button
          name="Linha do Tempo"
          background="#d0cecf"
          color="#000"
          border="#ababab 2px solid"
        />
        <Button
          name="Iniciar"
          background="#167ae4"
          color="#fff"
          border="#ababab 2px solid"
        />
      </CardButton>
      <Card>
        <h5>Vendedor: Kathianne Suellen Silva de Medeiros</h5>
        <h5>Criado por Mauricio Nascimento da Silva (Montagem)</h5>
      </Card>
    </Container>
  )
}

export default Modal
