import React from "react";

function Selects({ filter, instructions, valueOne, valueTwo, valueThree, valueFour, onChange }) {
  return (
    <div className="p-2">
      <select
        name={filter}
        id={filter}
        className="block w-full border border-gray-300 rounded px-4 py-2 text-xs sm:text-base bg-white focus:ring-2 focus:ring-blue-500"
        aria-label={instructions}
        onChange={onChange}
      >
        <option value="">{instructions}</option>
        {valueOne && <option value={valueOne}>{valueOne}</option>}
        {valueTwo && <option value={valueTwo}>{valueTwo}</option>}
        {valueThree && <option value={valueThree}>{valueThree}</option>}
        {valueFour && <option value={valueFour}>{valueFour}</option>}
      </select>
    </div>
  );
}

export default Selects;
