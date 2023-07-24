import React from "react";
import MiniDrawer from "./MiniDrawer";
// import ResponsiveDrawer from './ResponsiveDrawer';
import PropTypes from "prop-types";

const Sidenav = ({ color, brand, brandName, routes, ...rest }) => {
  return (
    <>
      <MiniDrawer color={color} brand={brand} brandName={brandName} routes={routes} {...rest} />
      {/* <ResponsiveDrawer /> */}
    </>
  );
};

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
