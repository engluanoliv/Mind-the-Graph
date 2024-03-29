import { functionalities } from "../../utils/data";
import { Description } from "./styles";
import Text from "../Text";
import Card from "../Card";
import Container from "../Container";
import Button from "../Button";

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
          <Text color="#fff" $textalign="center" $fontweight="bold">
            {title}
          </Text>
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
