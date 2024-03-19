import styled from "styled-components";
import headImg from "../../assets/head-02.png";
import Button from "../ButtonComponent/Button";
import Container from "../ContainerComponent/Container";

const Text = styled.h1`
  font-size: 34px;
  color: #fff;
`;

const Image = styled.img`
  position: absolute;
  right: 280px;
  top: 170px;
`;

export default function Section() {
  return (
    <>
      <Container>
        <Container
          direction="column"
          $alignitems="start"
          $padding="50px 110px"
          $margin="0px 100px"
          width="350px"
        >
          <Text>
            Discover all possibilities of using this powerfull tool and create
            science figures, posters and infographics.
          </Text>
          <Button>Start creating now</Button>
        </Container>
        <Image src={headImg} alt="Head Image" />
      </Container>
    </>
  );
}
