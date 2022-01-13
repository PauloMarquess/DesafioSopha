import React, { useState } from 'react'
import Button from '../../atomic/Button'
import { Form } from './styled'
import { datesCalendar } from '../../../constants/DATESCALENDAR'
import Scheduling from '../Scheduling'

const Header = () => {
  const [visible, setVisible] = useState(false)
  const handleShow = () => {
    setVisible(true)
  }
  return (
    <>
      <Form>
        <select>
          <option value="1" disabled selected>
            Nome da loja
          </option>
        </select>
        <select>
          <option value="2" disabled selected>
            Nome do Departamento
          </option>
        </select>
        <select>
          <option value="3" disabled selected>
            Nome do Fucionário
          </option>
        </select>
        <h2>
          Dia Atual{' '}
          <span>
            {' '}
            &lt; &gt;
            {datesCalendar()}
          </span>{' '}
        </h2>
        <select>
          <option value="4" disabled selected>
            Outros períodos
          </option>
          <option value="11">Próximos 15 dias</option>
          <option value="12">Próximos 30 dias</option>
          <option value="13">Este Mês</option>
          <option value="14">Próximo Mês</option>
          <option value="15">Escolher Período</option>
        </select>
        <Button
          name="Adicionar Agendamento"
          onClick={handleShow}
          type="button"
        />
      </Form>
      {visible && <Scheduling setVisible={setVisible} />}
    </>
  )
}

export default Header
