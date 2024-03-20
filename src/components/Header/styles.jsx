import styled from "styled-components";
import { device } from "../../utils/responsiveSettings";

export const Image = styled.img`
  position: absolute;
  right: 180px;
  top: 180px;
  @media (${(props) => device[props.$device]}) {
    right: 110px;
  }
  @media only screen and (max-width: 1210px) {
    display: none;
  }
`;
