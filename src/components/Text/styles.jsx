import styled from "styled-components";

export const StyledText = styled.h1`
  font-family: Lato;
  font-size: 34px;
  font-weight: ${(props) => (props.$fontweight ? props.$fontweight : "")};
  color: ${(props) => (props.color ? props.color : "#101010")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  text-align: ${(props) => (props.$textalign ? props.$textalign : "")};
`;
