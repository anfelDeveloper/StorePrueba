import { PlusIcon } from "@heroicons/react/24/solid";

function Card({ cardData }) {
  return (
    <div className="bg-white cursor-pointer w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <figure className="relative w-full">
        <span className="absolute bottom-0 left-0 bg-white/80 rounded-br-lg text-black text-xs font-medium m-2 px-3 py-1 shadow-md z-10">
          {cardData.category}
        </span>
        <div className="relative w-full aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={cardData.imagenUrl}
            alt="Producto"
          />
        </div>
        <div className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-lg z-10">
          <PlusIcon className="h-6 w-6 text-gray-800" />
        </div>
      </figure>
      <div className="p-4">
        <p className="flex justify-between text-sm font-bold mb-1">
          <span>{cardData.name}</span>
          <span className="text-sm font-medium">${cardData.price}</span>
        </p>
        <p className="text-center text-sm text-gray-700">
          {cardData.descripcio}
        </p>
      </div>
    </div>
  );
}

export default Card;
