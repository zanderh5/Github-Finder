import React, { Fragment } from "react";
import buggin from "./buggin.gif";

const Buggin = () => (
  <Fragment>
    <img
      src={buggin}
      alt="he do be buggin tho"
      style={{ width: "800px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Buggin;
