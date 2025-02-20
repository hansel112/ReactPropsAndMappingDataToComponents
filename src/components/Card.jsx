import React from "react";
import Avatar from "./Avatar";
import Paragraph from "./paragraph";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Paragraph paragraphInfo={props.tel} />
        <Paragraph paragraphInfo={props.email} />
      </div>
    </div>
  );
};

export default Card;
