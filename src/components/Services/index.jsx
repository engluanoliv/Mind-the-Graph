import { mindServices } from "../../utils/data";
import Card from "../Card";
import Container from "../Container";
import Text from "../Text";

export default function Services() {
  return (
    <>
      <Container $margin="100px 0px" direction="column" $flexwrap="wrap">
        <Text
          color="#7833ff"
          $margin="0 0 90px 0"
          $padding="0px 60px"
          $textalign="center"
        >
          Visualize what Mind the Graph can do for you
        </Text>
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
