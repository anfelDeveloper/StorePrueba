function SearchCard(onChange) {
  return (
    <div className="p-2 w-full sm:w-4/6 md:w-3/6 lg:w-2/6">
      <div>
        <input
          type="text"
          placeholder="🔍 Busca tu producto aquí"
          className="ml-2 p-3 border border-gray-300 rounded w-full text-xs xs:text-base outline-blue-700 "
        />
      </div>
    </div>
  );
}

export default SearchCard;
