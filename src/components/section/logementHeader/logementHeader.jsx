import React from 'react'
import Tag from '../../tag/tag';
import Avatar from '../../avatar/avatar';
import './logementHeader.css';
import {AiFillStar} from 'react-icons/ai'

function LogementHeader({title,host,tags,rating,location}) {
  const LogementRatingIcon = AiFillStar;
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filledStar = index < rating;
    return <LogementRatingIcon key={`star-${index}`} color={filledStar ? '#FF6060' : 'gray'} />;
  });

  return (
    <section className='logement-container'>
      <div className='logementSide1'>
        <h2 className='logementTitle'>{title}</h2>
        <p className='logementLocation'>{location}</p>
        <div className='logementTags'>
          {tags.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
      </div>
      <div className='logementSide2'>
        <Avatar host={host} />
        <div className='logementRating'>
          {stars}
        </div>
      </div>
    </section>
  );
}

export default LogementHeader;
