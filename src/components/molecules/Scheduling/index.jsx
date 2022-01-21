import React from 'react'
import { Form, Container, Checkout, CardButton, MiniContainer } from './styled'
import { BtnClose } from '../Modal/styled'
import Button from '../../atomic/Button'
import IconCalendar from '../../../assets/img/calendar.svg'
import Lupa from '../../../assets/img/lupa.svg'

const Scheduling = ({ setVisible }) => {
  const handleClose = () => {
    setVisible(false)
  }
  return (
    <Container>
      <BtnClose>
        <Button name="X" onClick={handleClose} />
      </BtnClose>
      <Form>
        <input
          type="text"
          placeholder="Buscar por Nome, CPF, CNPJ ou Celular"
          autofocus
        />
        <img src={Lupa} />

        <select>
          <option value="1" disabled selected>
            Linha do tempo/ Contrato
          </option>
        </select>
        <select>
          <option value="2" disabled selected>
            Etapa
          </option>
        </select>
        <select>
          <option value="3" disabled selected>
            Tipo de agendamento
          </option>
        </select>
        <MiniContainer>
          <img src={IconCalendar} />
          <select>
            <option type="date" value="4" disabled selected>
              Data
            </option>
          </select>
          <p> + opções</p>
        </MiniContainer>
        <MiniContainer>
          <select>
            <option value="5" disabled selected>
              Período
            </option>
          </select>
          <p>Horário</p>
        </MiniContainer>
        <select>
          <option value="6" disabled selected>
            Números de dias para reservar
          </option>
        </select>
        <textarea
          type="text"
          placeholder="Observações interna &#10;(Informação interna,não enviaremos para o Cliente)"
        ></textarea>
        <input type="text" placeholder="Colaboradores (marcar com @)" />

        <Checkout>
          <input type="checkbox" id="rg" name="rg" checked />
          <label for="rg">Enviar nome e RG dos colaboradores</label>
        </Checkout>
        <Checkout>
          <input type="checkbox" id="cliente" name="cliente" checked />
          <label for="cliente">Enviar agendamento para o cliente</label>
        </Checkout>
        <CardButton>
          <Button
            name="Cancelar"
            background="#fff"
            color="#000"
            border="#ababab 3px solid"
          />
          <Button
            name="Enviar"
            background="#167ae4"
            border="#ababab 3px solid"
          />
        </CardButton>
      </Form>
    </Container>
  )
}

export default Scheduling
