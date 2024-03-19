import Header from "./components/HeaderComponent/Header";
import Services from "./components/ServicesComponent/Services";
import Functionalities from "./components/FunctionalitiesComponent/Functionalities";
import { offerInformations } from "./utils/data";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Functionalities
        title={offerInformations.title}
        description={offerInformations.description}
      />
    </>
  );
}

export default App;
