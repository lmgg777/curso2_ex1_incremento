import React from "react";
import Counter from "./Counter";

const Component = () => {
  return (
    <div className="ui container" style={{ paddingTop: "10px" }}>
      <Counter initialNumber={-10} />
      <Counter initialNumber={7} />
      <Counter initialNumber={1} />
    </div>
  );
};

export default Component;
