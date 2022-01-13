import React from 'react';
import { Form,Container,Checkout,CardButton } from './styled';
import {BtnClose} from '../Modal/styled'
import Button from '../../atomic/Button'

const Scheduling =({setVisible}) => {
  const handleClose = () => {
    setVisible(false)
}
  return (
      <Container>
        <BtnClose>
        <Button name="X" onClick={handleClose} />
        </BtnClose>
          <Form>
            <input type="text" placeholder='Buscar por Nome, CPF, CNPJ ou Celular' autofocus  />
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
                <option value="1" disabled selected>
                   Data
                </option>
            </select>
            <select>
                <option value="1" disabled selected>
                    Período
                </option>
            </select>
            <select>
                <option value="1" disabled selected  >
                   Números de dias para reservar
                </option>
            </select>
            <input type="text" placeholder='Observações interna'rows="5" />
            <input type='text' placeholder='Colaboradores (marcar com @)' />
            
            <Checkout>
              <input type="checkbox" id="rg" name="rg" checked />
              <label for="rg">Enviar nome e RG dos colaboradores</label>
            </Checkout>
            <Checkout>
              <input type="checkbox" id="cliente" name ="cliente" checked  />
              <label for ="cliente">Enviar agendamento para o cliente</label>
            </Checkout>
            <CardButton>
              <Button name="Cancelar" />
              <Button name="Enviar"/>
            </CardButton>
          </Form>
      </Container>
  );
}

export default Scheduling;