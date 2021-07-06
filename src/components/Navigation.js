import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "blue",
};

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink> &nbsp;
      <NavLink to="/about" activeStyle={activeStyle} style={defaultStyle}>
        About
      </NavLink> &nbsp;
      <NavLink to="/TicTacToe" activeStyle={activeStyle} style={defaultStyle}>
        TicTacToe
      </NavLink>
    </div>
  );
};
export default Navigation;