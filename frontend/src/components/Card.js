import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


function Card({item, onCardClicked}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }} onClick={() => onCardClicked(item) } >
      <img src={require(`../assets/images/${item.imgURL}`)} style={{ width: '100%' }} alt="" />
      <span>{item.title}</span>
    </div>
  )
}



export default Card;