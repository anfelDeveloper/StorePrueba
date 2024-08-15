import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // Estados del contexto
  const [rangePrice, setRangePrice] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("Ascendente"); 
  const [isAvailable, setIsAvailable] = useState(null);


  return (
    <CardContext.Provider
      value={{
        rangePrice,
        setRangePrice,
        category,
        setCategory,
        sortOrder,
        setSortOrder,
        isAvailable,
        setIsAvailable
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
