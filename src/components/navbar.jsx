import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className ="navbar" id="nav">
        <div className ="links" id="link">
            <Link to="/"> Shop </Link>
            <Link to="/cart">
            <ShoppingCart size={32} />
            </Link>

        </div>

    </div>
  )
};
