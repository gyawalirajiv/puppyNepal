import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Category({item, onCategoryClicked}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}} onClick={() => onCategoryClicked(item) } >
      <img src={ require(`../assets/images/${item.imgURL}`)} style={{width: '100%'}} alt=""/>
        <span>{item.title}</span>
    </div>
  )

}



export default Category;