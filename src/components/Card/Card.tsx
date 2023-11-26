import React from 'react';
import './Card.css';
import { MangaResponseData } from '../../utils/api/apiTypes';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<MangaResponseData> = (props): JSX.Element => {
  return (
    <Link href={`/${props.mal_id}`} className="card" scroll={false}>
      <div className="card__img">
        <Image
          src={props.images.webp.image_url}
          alt={props.title}
          width={222}
          height={350}
          priority
        />
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
    </Link>
  );
};

export default Card;
