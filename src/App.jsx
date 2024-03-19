import Header from "./components/HeaderComponent/Header";
import Section from "./components/SectionComponent/Section";
import Services from "./components/ServicesComponent/Services";
import Functionalities from "./components/FunctionalitiesComponent/Functionalities";
import Background from "./layout/BackgroundLayout";
import { offerInformations } from "./utils/data";

function App() {
  return (
    <>
      <Background>
        <Header />
        <Section />
      </Background>
      <Services />
      <Functionalities
        title={offerInformations.title}
        description={offerInformations.description}
      />
    </>
  );
}

export default App;
