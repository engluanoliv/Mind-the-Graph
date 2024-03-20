import { StyledText } from "./styles";

export default function Text({ children, ...props }) {
  return (
    <>
      <StyledText {...props}>{children}</StyledText>
    </>
  );
}
