import React, { useState } from 'react'
import Button from '../../atomic/Button'
import { BtnClose, Card, CardButton, Container } from './styled'

const Modal = ({ setVisible }) => {
    const handleClose = () => {
        setVisible(false)
    }
    return (
        <Container>
            <BtnClose>
                <Button name="X" onClick={handleClose} />
            </BtnClose>
            <Card>
                <h4>Nome do cliente</h4>
                <p>Número do contrato</p>
            </Card>
            <Card>
                <h4>Endereço</h4>
                <p>Bairro - cidade</p>
            </Card>
            <Card>
                <p>Quantidade de ambiente :7</p>
                <p>Valor do investimento : R$ 85.000,00</p>
            </Card>
            <Card>
                <p>Observações :</p>
                <p>Valor do investimento : R$ 85.000,00</p>
            </Card>
            <CardButton>
                <Button name="Editar" />
                <Button name="Linha do Tempo" />
                <Button name="Iniciar" />
            </CardButton>
            <Card>
                <h5>Vendedor :Kathianne Suellen Silva de Medeiros</h5>
                <h5>Criado por Mauricio Nascimento da Silva (Montagem)</h5>
            </Card>
        </Container>
    )
}

export default Modal
