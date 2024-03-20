import { StyledButton } from "./styles";
export default function Button({ children, outlined }) {
  return (
    <>
      <StyledButton $outlined={outlined}>{children}</StyledButton>
    </>
  );
}
