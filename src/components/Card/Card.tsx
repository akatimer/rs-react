import { Component } from 'react';
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

class Card extends Component<cardStateType, cardStateType> {
  constructor(props: cardStateType) {
    super(props);
    this.state = {
      name: this.props.name,
      model: this.props.model,
      starship_class: this.props.starship_class,
      cost_in_credits: this.props.cost_in_credits,
      length: this.props.length,
      crew: this.props.crew,
      passengers: this.props.passengers,
      max_atmosphering_speed: this.props.max_atmosphering_speed,
      hyperdrive_rating: this.props.hyperdrive_rating,
      MGLT: this.props.MGLT,
      cargo_capacity: this.props.cargo_capacity,
    };
  }

  render() {
    return (
      <div className="card">
        <div className="card__line">
          <h3>Name: </h3>
          <h3>{this.state.name}</h3>
        </div>
        <div className="card__line">
          <h3>Model: </h3>
          <h3>{this.state.model}</h3>
        </div>
        <div className="card__line">
          <h3>Starship_class: </h3>
          <h3>{this.state.starship_class}</h3>
        </div>
        <div className="card__line">
          <h3>Cost_in_credits: </h3>
          <h3>{this.state.cost_in_credits}</h3>
        </div>
        <div className="card__line">
          <h3>Length: </h3>
          <h3>{this.state.length}</h3>
        </div>
        <div className="card__line">
          <h3>Crew: </h3>
          <h3>{this.state.crew}</h3>
        </div>
        <div className="card__line">
          <h3>Passengers: </h3>
          <h3>{this.state.passengers}</h3>
        </div>
        <div className="card__line">
          <h3>Max_atm_speed: </h3>
          <h3>{this.state.max_atmosphering_speed}</h3>
        </div>
        <div className="card__line">
          <h3>MGLT: </h3>
          <h3>{this.state.MGLT}</h3>
        </div>
        <div className="card__line">
          <h3>Cargo_capacity: </h3>
          <h3>{this.state.cargo_capacity}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
