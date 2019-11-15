/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext } from "react";
import { HomeContext } from "gatsby-theme-catalyst-core";

const Hero = () => {
  const [isHome] = useContext(HomeContext);
  if (isHome) {
    return (
      <div
        sx={{
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
          bg: "accent",
          height: "50vh"
        }}
      >
        <h1>Hero Section</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default Hero;
