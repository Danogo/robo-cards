import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = () => {
  return (
    <div>
      {
        robots.map((robot) => {
          return (
            <Card 
              key={robot.id} 
              id={robot.id} 
              name={robot.name} 
              email={robot.email}
            />
          );
        })
      }
    </div>
  )
};

export default CardList;