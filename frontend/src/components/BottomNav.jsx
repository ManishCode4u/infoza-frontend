import { Home, Briefcase, Phone, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Work", path: "/portfoliopage", icon: <Briefcase size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
    { name: "Clients", path: "/clients", icon: <Users size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md md:hidden z-50">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center text-xs transition-all ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {item.icon}
              <span className="mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
