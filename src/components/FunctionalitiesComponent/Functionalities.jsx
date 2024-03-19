import styled from "styled-components";
import { functionalities } from "../../utils/data";
import Card from "../CardComponent/Card";
import Container from "../ContainerComponent/Container";
import Button from "../ButtonComponent/Button";

const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  font-family: Lato;
`;

const Description = styled.p`
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
      <Container $justify="center" $margin="0px 40px">
        <Container
          direction="column"
          $textalign="center"
          $bgcolor="#5f29cc"
          $padding="50px"
          $borderradius="24px"
          $maxwidth="900px"
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
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
      </Container>
    </>
  );
}
