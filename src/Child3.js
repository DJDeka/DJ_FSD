import React, { useContext } from "react";
import { Context } from "./App";

const Child3 = () => {
  const context = useContext(Context);
  return <div>{context.data}</div>;
};

export default Child3;