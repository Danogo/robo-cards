import React from 'react';

const Card = ({id, email, name }) => {
  console.log('Card')
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=250x200`} alt="Robot"/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;