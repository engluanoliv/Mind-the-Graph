import { StyledContainer } from "./styles";

export default function Container({ children, device, gradient, ...props }) {
  return (
    <>
      <StyledContainer $device={device} $background={gradient} {...props}>
        {children}
      </StyledContainer>
    </>
  );
}
