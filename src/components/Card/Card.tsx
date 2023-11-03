import React from 'react';
import './Card.css';

export type cardStateType = {
  name: string;
  model: string;
  starship_class: string;
  manufacturer?: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables?: string;
  films?: string[];
  pilots?: string[];
  url?: string;
  created?: string;
  edited?: string;
};

const Card: React.FC<cardStateType> = (props): JSX.Element => {
  return (
    <div className="card">
      <div className="card__line">
        <h3>Name: </h3>
        <h3>{props.name}</h3>
      </div>
      <div className="card__line">
        <h3>Model: </h3>
        <h3>{props.model}</h3>
      </div>
      <div className="card__line">
        <h3>Starship_class: </h3>
        <h3>{props.starship_class}</h3>
      </div>
      <div className="card__line">
        <h3>Cost_in_credits: </h3>
        <h3>{props.cost_in_credits}</h3>
      </div>
      <div className="card__line">
        <h3>Length: </h3>
        <h3>{props.length}</h3>
      </div>
      <div className="card__line">
        <h3>Crew: </h3>
        <h3>{props.crew}</h3>
      </div>
      <div className="card__line">
        <h3>Passengers: </h3>
        <h3>{props.passengers}</h3>
      </div>
      <div className="card__line">
        <h3>Max_atm_speed: </h3>
        <h3>{props.max_atmosphering_speed}</h3>
      </div>
      <div className="card__line">
        <h3>MGLT: </h3>
        <h3>{props.MGLT}</h3>
      </div>
      <div className="card__line">
        <h3>Cargo_capacity: </h3>
        <h3>{props.cargo_capacity}</h3>
      </div>
    </div>
  );
};

export default Card;
