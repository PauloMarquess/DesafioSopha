import { Card, Container, List, Main, Current } from './styled'
import {
  numbersWeek,
  weekDays,
  dayOne,
  dayOfTheWeek,
} from '../../../constants/DATESCALENDAR'

function Calendar() {
  const nameWeek = weekDays.map((dia) => {
    return (
      <>
        {dayOfTheWeek === dia ? <Current>{dia}</Current> : <Card>{dia}</Card>}
      </>
    )
  })
  const numberWeeks = numbersWeek.map((data) => {
    return (
      <>{dayOne === data ? <Current>{data}</Current> : <Card>{data}</Card>}</>
    )
  })
  return (
    <Main>
      <h4>Colaboradores</h4>
      <Container>
        <List>{nameWeek}</List>
        <List>{numberWeeks}</List>
      </Container>
    </Main>
  )
}

export default Calendar
