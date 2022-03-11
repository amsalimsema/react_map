import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h1 className="card_title">{props.title}</h1>
      <h1 className="card_title">{props.desc}</h1>
      {/* <h1 className="card_title">{props.url}</h1> */}
    </div>
  );
}
