import Calendar from "../../components/molecules/Calendar";
import Collaborator from "../../components/molecules/Collaborator";
import Header from "../../components/molecules/Header";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <Header />
      <Calendar />
      <Collaborator />
    </Container>
  );
};

export default Home;
