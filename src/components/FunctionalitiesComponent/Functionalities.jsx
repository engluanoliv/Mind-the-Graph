import styled from "styled-components";
import { functionalities } from "../../utils/data";
import Card from "../CardComponent/Card";
import Container from "../ContainerComponent/Container";
import Button from "../ButtonComponent/Button";

const OfferTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  font-family: Lato;
`;

const OfferDescription = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: normal;
  font-family: Lato;
  text-align: center;
  padding: 50px 60px;
`;

export default function Functionalities({ title, description }) {
  return (
    <>
      <Container
        direction="column"
        $bgcolor="#5f29cc"
        $margin="100px 400px"
        $padding="70px 100px 40px 100px"
        $borderradius="24px"
      >
        <OfferTitle>{title}</OfferTitle>
        <OfferDescription>{description}</OfferDescription>
        <Container $flexwrap="wrap" $justify="center">
          {functionalities.map((functionality) => (
            <Card
              key={functionality.id}
              title={functionality.title}
              description={functionality.description}
              img={functionality.img}
            />
          ))}
        </Container>
        <Button outlined="true">EXPLORE MIND THE GRAPH</Button>
      </Container>
    </>
  );
}
