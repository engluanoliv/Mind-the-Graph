import styled from "styled-components";
import headImg from "../../assets/head-02.png";
import Button from "../ButtonComponent/Button";
import Container from "../ContainerComponent/Container";
import Background from "../../layout/BackgroundLayout";
import NavBar from "../NavBarComponent/NavBar";
import { device } from "../../utils/responsiveSettings";

const Text = styled.h1`
  font-size: 34px;
  color: #fff;
`;

const Image = styled.img`
  position: absolute;
  right: 180px;
  top: 180px;
  @media (${(props) => device[props.$device]}) {
    right: 110px;
  }
  @media only screen and (max-width: 1210px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <>
      <Background>
        <NavBar />
        <Container $device="tablet" $padding="50px 100px">
          <Container direction="column" width="350px">
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
