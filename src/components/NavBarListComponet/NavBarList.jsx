import { navData } from "../../utils/data";
import NavLink from "../NavLinkComponent/NavLink";
import Button from "../ButtonComponent/Button";
import styled from "styled-components";
import { device } from "../../utils/responsiveSettings";

const NavListContainer = styled.div`
  @media only screen and (${(props) => device[props.$device]}) {
    display: flex;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.$open ? "0px" : "-100%")};
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    background: transparent linear-gradient(248deg, #dc1866 0%, #ff9226 120%) 0%
      0% no-repeat padding-box;
  }
`;

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
