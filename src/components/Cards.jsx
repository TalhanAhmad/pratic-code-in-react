import React from "react";
// import img from '../public/Screenshot_8-9-2025_16612_.jpeg'

const Cards = (props) => {
  return (
    <>
      <section className="card">
        <div className="photo">
            <img src={props.image} alt="" />
        </div>
        <div className="content">
            <h2>{props.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non!</p>
        </div>
      </section>
    </>
  );
};

export default Cards;
