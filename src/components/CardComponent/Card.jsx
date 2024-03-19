import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 440px;
  max-width: 300px;
  text-align: center;
  margin: ${(props) => (props.$isservice ? "0px 40px" : "30px 0px")};
`;

const CardTitle = styled.p`
  color: ${(props) => (props.$isservice ? "#7833ff" : "#fff")};
  font-weight: bold;
  font-size: 20px;
  padding: 0px 25px;
  font-family: Lato;
  margin: ${(props) => (props.$isservice ? "" : "10px")};
`;
const CardDescription = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: ${(props) => (props.$isservice ? "#212121" : "#fff")};
  padding: ${(props) => (props.$isservice ? "0px 10px" : "0px")};
  margin: ${(props) => (props.$isservice ? "" : "10px")};
  font-family: Lato;
`;

export default function Card({ img, title, description, isservice }) {
  return (
    <>
      <CardContainer $isservice={isservice}>
        <img src={img} alt="..." />
        <CardTitle $isservice={isservice}>{title}</CardTitle>
        <CardDescription $isservice={isservice}>{description}</CardDescription>
        {isservice && (
          <a href="#" style={{ fontWeight: "bold" }}>
            &gt; LEARN MORE{" "}
          </a>
        )}
      </CardContainer>
    </>
  );
}
