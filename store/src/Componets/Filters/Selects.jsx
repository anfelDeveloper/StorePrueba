function Selects({ filter, instructions, valueOne,valueTwo, valueThree, valueFour,onChange }) {
  return (
    <div className="p-2 sm:p-2 ">
      <select
        name={filter}
        id={filter}
        className="outline-blue-700 block border border-gray-300 rounded px-4 py-2 text-xs xs:text-base p-4"
        aria-label={instructions}
        onChange={onChange}
      >
        <option value="">{instructions}</option>
        <option value={valueOne}>{valueOne}</option>
        <option value={valueTwo}>{valueTwo} </option>
        <option value={valueThree}>{valueThree}</option>
        <option value={valueFour}>{valueFour}</option>
      </select>
    </div>
  );
}

export default Selects;
