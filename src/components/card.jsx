import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.data.avatar_url} alt="" />
      <h2>{props.data.login}</h2>
    </div>
  );
}
