import styled from "styled-components";

const StyledLink = styled.a`
  padding: 20px;
  text-decoration: none;
  color: #fff;
  font-family: Lato;
  font-weight: bold;

  &:hover {
    color: #fff;
  }
`;

export default function NavLink({ children }) {
  return (
    <>
      <StyledLink href="#">{children}</StyledLink>
    </>
  );
}
