import React from "react";
//import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>Hello from Results</h1>
      </div>
    );
  } else {
    return null;
  }
}
