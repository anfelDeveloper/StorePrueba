import "../App/app.css";
import Header from "../../Componets/Header";
import CardLayout from "../../Componets/CardLayout";
import Filters from "../../Componets/Filters/Filters";
import { CardProvider } from "../../Context/CardContext";
import Footer from "../../Componets/Footer";

function App() {
  return (
    <>
      <Header />
      <CardProvider>
        <Filters />
        <CardLayout />
      </CardProvider>
     <Footer/>
    </>
  );
}

export default App;
