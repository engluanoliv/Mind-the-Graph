import styled from "styled-components";
import { device } from "../../utils/responsiveSettings";

export const Icon = styled.div`
  display: none;
  @media only screen and (${(props) => device[props.$device]}) {
    display: block;
    cursor: pointer;
  }
`;

export const BarIcon = styled.div`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background-color: #fff;
  &:nth-child(1) {
    transform: ${({ open }) =>
      open ? "rotate(45deg) translateY(11px)" : "rotate(0)"};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) =>
      open ? "rotate(-45deg) translateY(-11px)" : "rotate(0)"};
  }
`;
