import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 20px 10px;
  padding: 13px 30px;
  border-radius: 50px;
  border-color: ${(props) => (props.$outlined ? "#fff" : "")};
  background-color: ${(props) => (props.$outlined ? "transparent" : "#7833ff")};
  font-family: Lato;
  font-weight: bold;
  color: #fff;
`;
