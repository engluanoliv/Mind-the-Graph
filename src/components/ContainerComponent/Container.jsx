import styled from "styled-components";

const background =
  "transparent linear-gradient(248deg, #dc1866 0%, #ff9226 100%) 0% 0% no-repeat padding-box";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "")};
  align-items: ${(props) => (props.$alignitems ? props.$alignitems : "center")};
  justify-content: ${(props) => (props.$justify ? props.$justify : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : "")};
  border-radius: ${(props) => (props.$borderradius ? props.$borderradius : "")};
  flex-wrap: ${(props) => (props.$flexwrap ? props.$flexwrap : "")};
  width: ${(props) => (props.width ? props.width : "")};
  background: ${(props) => (props.$background ? background : "")};
  max-width: ${(props) => (props.$maxwidth ? props.$maxwidth : "")};
`;

export default function Container({ children, gradient, ...props }) {
  return (
    <>
      <StyledContainer $background={gradient} {...props}>
        {children}
      </StyledContainer>
    </>
  );
}
