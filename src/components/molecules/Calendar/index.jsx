import { Card, Container, List,Main, Pegou } from "./styled";
import { numbersWeek, weekDays ,dayOne } from "../../../constants/DATESCALENDAR";
function Calendar() {
  const nameWeek = weekDays.map((dia) => {
    return <Card>{dia}</Card>;
  });
  const numberWeeks = numbersWeek.map((data) => { 
   
    return <>{dayOne===data ? <Pegou>{data}</Pegou> :<Card>{data}</Card>}</>
  });
  return (
    <Main>
      <h3>Colaboradores</h3>
    <Container>
      <List>{nameWeek}</List>
      <List>{numberWeeks}</List>
    </Container>
    </Main>
  );
}

export default Calendar;
