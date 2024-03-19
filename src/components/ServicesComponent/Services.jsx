import styled from "styled-components";
import { mindServices } from "../../utils/data";
import Card from "../CardComponent/Card";
import Container from "../ContainerComponent/Container";

const ServiceContainerTitle = styled.h1`
  color: #7833ff;
  font-size: 34px;
  margin-bottom: 90px;
  font-family: Lato;
  text-align: center;
`;

export default function Services() {
  return (
    <>
      <Container $margin="100px 0px" direction="column" $flexwrap="wrap">
        <ServiceContainerTitle>
          Visualize what Mind the Graph can do for you
        </ServiceContainerTitle>
        <Container $flexwrap="wrap" $justify="center">
          {mindServices.map((service) => (
            <Card
              isservice="true"
              key={service.id}
              img={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </Container>
      </Container>
    </>
  );
}
