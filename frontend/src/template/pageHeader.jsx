import React from "react";

export default function pageHeader(props) {
  return (
    <header className="page-header">
      <h2>
        {props.name} <small>{props.small}</small>
      </h2>
    </header>
  );
}
