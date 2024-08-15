import SearchCard from "./SearchCard";
import Selects from "./Selects";
import { useContext } from "react";
import { CardContext } from "../../Context/CardContext";

function Filters() {
  const context = useContext(CardContext);

  const handlePriceChange = (e) => {
    context.setRangePrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    context.setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    context.setSortOrder(e.target.value);
  };



  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly m-5 lg:m-10">
      <SearchCard />
      <div className="p-5 flex items-center space-x-3">
        <input
          type="checkbox"
          id="stock"
          className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-xs text-gray-700 font-medium">
          Stock
        </label>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-4 w-full lg:w-auto">
        <Selects
          instructions={"Seleccione el precio"}
          valueOne={"$10 - $50"}
          valuetwo={"$51 - $100"}
          valueThree={"$101 - $200"}
          valueFour={"mayor a $200"}
          onChange={handlePriceChange}
        />

        <Selects
          instructions={"Seleccione la categoría"}
          valueOne={"Billeteras"}
          valuetwo={"Sombreros"}
          valueThree={"Relojes"}
          valueFour={"Cinturones"}
          onChange={handleCategoryChange}
        />

        <Selects
          instructions={"Ordenar por precio"}
          valueOne={"Menor precio"}
          valuetwo={"Mayor precio"}
          onChange={handleSortChange}
        />
      </div>
    </div>
  );
}

export default Filters;
