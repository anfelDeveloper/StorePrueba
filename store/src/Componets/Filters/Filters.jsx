import React, { useContext } from "react";
import Selects from "./Selects";
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

  const handleAvailableChange = (e) => {
    context.setIsAvailable(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-around m-5 lg:m-10 space-y-4 lg:space-y-0">
      <Selects
        filter="price"
        instructions="Seleccione el precio"
        valueOne="$10 - $50"
        valueTwo="$51 - $100"
        valueThree="$101 - $200"
        valueFour="mayor a $200"
        onChange={handlePriceChange}
      />

      <Selects
        filter="category"
        instructions="Seleccione la categoría"
        valueOne="Billeteras"
        valueTwo="Sombreros"
        valueThree="Relojes"
        valueFour="Cinturones"
        onChange={handleCategoryChange}
      />

      <Selects
        filter="sort"
        instructions="Ordenar por precio"
        valueOne="Menor precio"
        valueTwo="Mayor precio"
        onChange={handleSortChange}
      />

      <Selects
        filter="availability"
        instructions="Todos"
        valueOne="Disponible"
        valueTwo="No disponible"
        onChange={handleAvailableChange}
      />
    </div>
  );
}

export default Filters;
