import headImg from "../../assets/head-02.png";
import Button from "../Button";
import Container from "../Container";
import Background from "../../layout/BackgroundLayout";
import NavBar from "../NavBar";
import Text from "../Text";
import { Image } from "./styles";

export default function Header() {
  return (
    <>
      <Background>
        <NavBar />
        <Container $device="tablet" $padding="50px 100px">
          <Container
            $device="laptop"
            direction="column"
            width="340px"
            $alignitems="start"
          >
            <Text color="#fff" $fontweight="900">
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
