import headImg from "../../assets/head-02.png";
import Button from "../Button";
import Container from "../Container";
import Background from "../../layout/BackgroundLayout";
import NavBar from "../NavBar";
import { Text, Image } from "./styles";

export default function Header() {
  return (
    <>
      <Background>
        <NavBar />
        <Container $device="tablet" $padding="50px 100px">
          <Container
            $device="laptop"
            direction="column"
            width="350px"
            $alignitems="start"
          >
            <Text>
              Discover all possibilities of using this powerfull tool and create
              science figures, posters and infographics.
            </Text>
            <Button>Start creating now</Button>
          </Container>
          <Image $device="laptopL" src={headImg} alt="Head Image" />
        </Container>
      </Background>
    </>
  );
}
