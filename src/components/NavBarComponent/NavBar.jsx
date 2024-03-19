import { useState } from "react";
import logo from "../../assets/logo.svg";
import Container from "../ContainerComponent/Container";
import HamburguerNav from "../HamburguerNavComponent/HamburguerNav";
import NavBarList from "../NavBarListComponet/NavBarList";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container $justify="space-between" $padding="20px 50px">
        <img src={logo} alt="Mind the Graph" />
        <NavBarList isOpen={isOpen} />
        <HamburguerNav onOpen={setIsOpen} />
      </Container>
    </>
  );
}
