import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar  ">
        <a className=" cart-brand" href="#">
          <i className="cart-icon  icon-shopping-cart"></i>
          &#160; Mini Cart
        </a>
      </nav>
    );
  }
}

export default Navbar;
