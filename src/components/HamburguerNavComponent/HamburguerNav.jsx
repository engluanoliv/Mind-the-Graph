import styled from "styled-components";

const Icon = styled.div`
  display: none;
  @media only screen and (max-width: 864px) {
    display: block;
    cursor: pointer;
  }
`;

const BarIcon = styled.div`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  border-radius: 10px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
`;

export default function HamburguerNav({ ...props }) {
  return (
    <Icon {...props}>
      <BarIcon></BarIcon>
      <BarIcon></BarIcon>
      <BarIcon></BarIcon>
    </Icon>
  );
}
