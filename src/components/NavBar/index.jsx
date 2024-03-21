import { useState } from "react";
import logo from "../../assets/logo.svg";
import Container from "../Container";
import HamburguerNav from "../HamburguerNav";
import NavBarList from "../NavBarList";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenHandler() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <>
      <Container $justify="space-between" $padding="20px 50px">
        <img src={logo} alt="Mind the Graph" />
        <NavBarList isOpen={isOpen} />
        <HamburguerNav onOpen={onOpenHandler} />
      </Container>
    </>
  );
}
