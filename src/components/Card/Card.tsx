import React from 'react';
import './Card.css';
import { MangaResponseData } from '../../utils/api/apiTypes';

const Card: React.FC<MangaResponseData> = (props): JSX.Element => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.images.webp.image_url} />
      </div>
      <div className="card__info">
        <div className="card__line">
          <h3>Title: </h3>
          <h3>{props.title}</h3>
        </div>
        <div className="card__line">
          <h3>Score: </h3>
          <h3>{props.score || '---'}</h3>
        </div>
        <div className="card__line">
          <h3>Status: </h3>
          <h3>{props.status}</h3>
        </div>
        <div className="card__line">
          <h3>Volumes: </h3>
          <h3>{props.volumes || '---'}</h3>
        </div>
        <div className="card__line">
          <h3>Chapters: </h3>
          <h3>{props.chapters || '---'}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
