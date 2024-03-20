import { navData } from "../../utils/data";
import NavLink from "../NavLink";
import Button from "../Button";
import { NavListContainer } from "./styles";

export default function NavBarList({ isOpen }) {
  return (
    <>
      <NavListContainer $device="tablet" $open={isOpen}>
        {navData.map((item) => (
          <NavLink href={item.href} key={item.id}>
            {item.title}
          </NavLink>
        ))}
        <Button outlined="true">Login</Button>
        <Button>Sign up free</Button>
      </NavListContainer>
    </>
  );
}
