import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots, isPending}) => {
  return(
    <Fragment>
      {console.log('CardList', robots)}
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
