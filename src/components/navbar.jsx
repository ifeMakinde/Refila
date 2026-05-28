import { Flame } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const navigation = [
  { name: "How it works", href: "#howitworks" },
  { name: "Order", href: "#order" },
  { name: "Track", href: "#track" },
  { name: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleOrder = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }

    isLoggedIn ? navigate("#order") : navigate("/login");
  };
  return (
    <nav className="flex items-center justify-between md:justify-evenly px-8 py-3 border-b border-b-gray-50 bg-white/80 backdrop-blur-sm fixed left-0 right-0 z-1000">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <Flame className="text-orange-500" />
        <span>
          <a href="/">Refilia</a>
        </span>
      </div>

      <div className="hidden md:flex gap-6 text-sm text-gray-600">
        {navigation.map((item, i) => (
          <a key={i} href={item.href} className="hover:text-orange-500">
            {item.name}
          </a>
        ))}
      </div>

      <button
        className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-full text-sm"
        onClick={handleOrder}
      >
        <a href="#order">Order a refill</a>
      </button>
    </nav>
  );
}
