import { CardContainer, CardTitle, CardDescription } from "./styles";

export default function Card({ img, title, description, isservice }) {
  return (
    <>
      <CardContainer $isservice={isservice}>
        <img src={img} alt="..." />
        <CardTitle $isservice={isservice}>{title}</CardTitle>
        <CardDescription $isservice={isservice}>{description}</CardDescription>
        {isservice && (
          <a href="#" style={{ fontWeight: "bold" }}>
            &gt; LEARN MORE
          </a>
        )}
      </CardContainer>
    </>
  );
}
