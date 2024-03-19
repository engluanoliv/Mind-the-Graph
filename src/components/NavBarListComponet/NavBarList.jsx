import { navData } from "../../utils/data";
import NavLink from "../NavLinkComponent/NavLink";
import Button from "../ButtonComponent/Button";
import styled from "styled-components";

const NavListContainer = styled.div`
  @media only screen and (max-width: 864px) {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }
`;

export default function NavBarList() {
  return (
    <>
      <NavListContainer>
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
