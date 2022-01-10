import React from "react";

export default function Job(props) {
  return (
    <li>
      <span>{props.job}</span>
      <button onClick={props.toggle}>Edit</button>
      <button onClick={() => props.delete(props.index)}>Delete</button>
    </li>
  );
}
