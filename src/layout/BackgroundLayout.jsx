import styled from "styled-components";

const StyledContainer = styled.div`
  background: transparent linear-gradient(248deg, #dc1866 0%, #ff9226 100%) 0%
    0% no-repeat padding-box;
`;

export default function Background({ children }) {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}
