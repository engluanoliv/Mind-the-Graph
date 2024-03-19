import logo from "../../assets/logo.svg";
import Container from "../ContainerComponent/Container";
import HamburguerNav from "../HamburguerNavComponent/HamburguerNav";
import NavBarList from "../NavBarListComponet/NavBarList";

export default function NavBar() {
  return (
    <>
      <Container
        device="mobileL"
        $justify="space-between"
        $padding="20px 40px"
      >
        <img src={logo} alt="Mind the Graph" />
        <NavBarList />
        <HamburguerNav />
      </Container>
    </>
  );
}
