import styled from "styled-components";

const background =
  "transparent linear-gradient(248deg, #dc1866 0%, #ff9226 100%) 0% 0% no-repeat padding-box";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "")};
  width: ${(props) => (props.width ? props.width : "")};
  background: ${(props) => (props.background ? background : "")};
`;

export default function Container({ children, gradient, ...props }) {
  return (
    <>
      <StyledContainer background={gradient} {...props}>
        {children}
      </StyledContainer>
    </>
  );
}
