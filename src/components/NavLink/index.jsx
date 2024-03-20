import { StyledLink } from "./styles";
export default function NavLink({ children }) {
  return (
    <>
      <StyledLink href="#">{children}</StyledLink>
    </>
  );
}
