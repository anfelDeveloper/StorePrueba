import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import logo from "../../public/logo.png";

function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="hidden md:flex items-center flex-col">
        <h1 className="text-xl font-bold font-style">Shopping</h1>
        <p>Mejores accesorios para hombre a tu alcance</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="text-lg">0</div>
        <ShoppingCartIcon className="w-8 h-8 text-gray-600" />
      </div>
    </header>
  );
}

export default Header;
