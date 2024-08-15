import "../../../src/App.css";
import Header from "../../Componets/Header";
import CardLayout from "../../Componets/CardLayout";
import Filters from "../../Componets/Filters/Filters";
import { CardProvider } from "../../Context/CardContext";

function App() {
  return (
    <>
      <Header />
      <CardProvider>
        <Filters />
        <CardLayout />
      </CardProvider>
    </>
  );
}

export default App;
