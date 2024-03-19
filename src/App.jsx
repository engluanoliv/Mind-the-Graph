import Header from "./components/HeaderComponent/Header";

import styled from "styled-components";
import Section from "./components/SectionComponent/Section";
import Services from "./components/ServicesComponent/Services";
import OfferCard from "./components/OfferCardComponent/OfferCard";

import { offerInformations } from "./utils/data";

const Background = styled.div`
  background: transparent linear-gradient(248deg, #dc1866 0%, #ff9226 100%) 0%
    0% no-repeat padding-box;
`;

function App() {
  return (
    <>
      <Background>
        <Header />
        <Section />
      </Background>
      <Services />
      <OfferCard
        title={offerInformations.title}
        description={offerInformations.description}
      />
    </>
  );
}

export default App;
