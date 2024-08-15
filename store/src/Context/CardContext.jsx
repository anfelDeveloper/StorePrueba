import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [rangePrice, setRangePrice] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('Ascendente'); 

  console.log(sortOrder)

  return (
    <CardContext.Provider value={{ rangePrice, setRangePrice, category, setCategory, sortOrder, setSortOrder }}>
      {children}
    </CardContext.Provider>
  );
};
