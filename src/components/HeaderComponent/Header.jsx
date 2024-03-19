import logo from "../../assets/logo.svg";
import Button from "../ButtonComponent/Button";
import NavLink from "../NavLinkComponent/NavLink";
import Container from "../ContainerComponent/Container";
import { navData } from "../../utils/data";

export default function Header() {
  return (
    <>
      <Container $justify="space-between" $padding="20px 150px">
        <img src={logo} alt="Mind the Graph" />
        <Container>
          {navData.map((item) => (
            <NavLink href={item.href} key={item.id}>
              {item.title}
            </NavLink>
          ))}
          <Button outlined="true">Login</Button>
          <Button>Sign up free</Button>
        </Container>
      </Container>
    </>
  );
}
