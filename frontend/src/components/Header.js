import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axiosclient from "util/axiosClient";


function Header() {
  const [categoryList, setCategory] = useState([]);
  useEffect(() => {
    gettodosWithaxios();
  }, []);

  const gettodosWithaxios = async () => {
    const response = await axiosclient.get('/category');
    setCategory(response.data);
  };

  return (
    <>
    <div className="top-bar" style={{display: 'flex', justifyContent: 'space-around', border: '1px solid #ccc', padding: '5px', borderLeft: 'none', borderRight: 'none'}}>
        <div className="left-top-bar" style={{display: 'flex', justifyContent: 'space-around', gap: '20px'}}>
          <a href="#">enable accessibility</a>
          <span>|</span>
          <a href="#">gift card</a>
          <span>|</span>
          <a href="#">track your order</a>
        </div>
        <div className="middle-top-bar">
          <b>10,164,721 lives saved.</b>
        </div>
        <div className="left-top-bar" style={{display: 'flex', justifyContent: 'space-around', gap: '20px'}}>
          <span>sign up, earn points, get treats</span>
        </div>
      </div>
      <div className="search-nav" style={{display: 'flex', justifyContent: 'space-around', marginTop: '5px', alignItems: 'center'}}>
        <div>
          <Link to="/"><img src={ require('../assets/images/puppyNepal.png')} /></Link>
          
        </div>
        <div style={{position: 'relative'}}>
          <input type="text" id="search" placeholder="search" />
          <input type="submit" id="search-submit" value="" title="Search" />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
          <img src={ require('../assets/images/loyalty-icon.png')} style={{width: '40px', objectFit: 'contain'}} />
          <div className="sign-in">
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Link to="/login"><b>Sign In</b></Link>
              </div>
            <span style={{fontSize: '13px'}}>Treats & Account</span>
          </div>
        </div>
        <div>
          <i className="fa fa-shopping-cart" style={{fontSize: '30px'}}></i>
        </div>
      </div>
      <div className="nav" style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#007db4', color: 'white', padding: '20px', margin: '10px 0'}}>
      {
              categoryList ? (
                categoryList.map((ele, id) => {
                  return ( <Link to={"/list/"+ele.categoryId+"/"+ele.title} style={{ color: 'white' }} key={id}>{ele.title} </Link> );
                })
                ) : (
                  <div>Data Not Found</div>
                )
                }
      </div>
    </>
  )

}



export default Header;