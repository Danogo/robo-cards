import React from 'react';
import Card from './Card';

// destructurin robots property from props, robots = props.robots
const CardList = ({robots}) => {
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