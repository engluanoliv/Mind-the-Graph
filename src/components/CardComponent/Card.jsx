import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 440px;
  max-width: 300px;
  text-align: center;
  margin: ${(props) => (props.isService ? "0px 40px" : "30px 0px")};
`;

const CardTitle = styled.p`
  color: ${(props) => (props.isService ? "#7833ff" : "#fff")};
  font-weight: bold;
  font-size: 20px;
  padding: 0px 25px;
  font-family: Lato;
  margin: ${(props) => (props.isService ? "" : "10px")};
`;
const CardDescription = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: ${(props) => (props.isService ? "#212121" : "#fff")};
  padding: ${(props) => (props.isService ? "0px 10px" : "0px")};
  margin: ${(props) => (props.isService ? "" : "10px")};
  font-family: Lato;
`;

export default function Card({ img, title, description, isService }) {
  return (
    <>
      <CardContainer isService={isService}>
        <img src={img} alt="..." />
        <CardTitle isService={isService}>{title}</CardTitle>
        <CardDescription isService={isService}>{description}</CardDescription>
        {isService && <a href="#">&gt; LEARN MORE </a>}
      </CardContainer>
    </>
  );
}
