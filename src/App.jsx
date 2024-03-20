import Header from "./components/Header";
import Services from "./components/Services";
import Functionalities from "./components/Functionalities";
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
