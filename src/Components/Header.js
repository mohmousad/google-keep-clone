import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="p-3 border-bottom d-flex justify-content-center bg-info">
      {location.pathname === "/" && (
        <form className="w-50">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
          />
        </form>
      )}
    </header>
  );
};

export default Header;
