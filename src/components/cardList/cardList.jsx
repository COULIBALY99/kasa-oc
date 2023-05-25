import React from 'react'
import Card from "../card/card";
import './cardList.css';




function CardList({ list }) {
  return (
    <section className="card-list-container">
      {list.map((elm, i) => {
        return (
          <Card title={elm.title} id={elm.id} key={elm.id} url={elm.cover} />
        );
      })}
    </section>
  );
}

export default CardList;




















