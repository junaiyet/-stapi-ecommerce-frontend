import React from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card";

export default function FeatureProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: " grapic ",
      isNew: true,
      oldPrice: 19,
      price: 17,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long sleve grapic asdf",
      isNew: true,
      oldPrice: 10,
      price: 15,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Somers",
      isNew: false,
      oldPrice: 30,
      price: 25,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ioasdf",
      isNew: true,
      oldPrice: 12,
      price: 19,
    },
  ];
  return (
    <div className="featureProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
          // <div item={item}>
          //   <img src={item.img} alt="" />
          // </div>
        ))}
      </div>
    </div>
  );
}
