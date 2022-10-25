import CardAuction from "../CardAuction";
import { Container, Main } from "./styled";

const ContainerAuction = ({ arrayTorender }) => {
  return (
    <Main>
      <h5>Leilão </h5>
      <Container>
        {arrayTorender.map((item, index) => {
          return (
            <CardAuction
              key={index}
              timer={item.timer}
              img={item.img}
              title={item.title}
              details={item.details}
              user={item.user}
              KM={item.KM}
              year={item.year}
              value={item.value}
            />
          );
        })}
      </Container>
    </Main>
  );
};

export default ContainerAuction;
