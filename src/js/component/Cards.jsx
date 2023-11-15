import React from "react";

const Cards = (props) => {
  return (
    <div className="card mx-1">
      <img src={props.imagen} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.titulo}</h5>
        <p className="card-text text-center">{props.descripcion}</p>
        <a href="#" className="btn btn-primary align-self-center">
          Go Somewhere
        </a>
      </div>
    </div>
  );
};
export default Cards;
