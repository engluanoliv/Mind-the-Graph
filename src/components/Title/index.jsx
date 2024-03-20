import { StyledTitle } from "./styles";

export default function Title({ children, ...props }) {
  return (
    <>
      <StyledTitle {...props}>{children}</StyledTitle>
    </>
  );
}
