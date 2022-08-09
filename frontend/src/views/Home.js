import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Category from "../components/Category";
import axiosclient from "../util/axiosClient";
import Header from "../components/Header"
import Footer from "../components/Footer"

let initialstate = [
  { title: 'Dog', imgURL: 'WEB-1178113-Jan22_DEAL1_Dog.jpg' },
  { title: 'Cat', imgURL: 'WEB-1178113-Jan22_DEAL2_Cat.jpg' },
  { title: 'Fish', imgURL: 'WEB-1178113-Jan22_DEAL3_Fish.jpg' },
  { title: 'Bird', imgURL: 'WEB-1178113-Jan22_DEAL4_Bird.jpg' },
  { title: 'Reptile', imgURL: 'WEB-1178113-Jan22_DEAL5_Reptile.jpg' },
  { title: 'Small Pet', imgURL: 'WEB-1178113-Jan22_DEAL6_SmPet.jpg' }
]

function Home() {
  const [userData, setUserData] = useState([]);
  const [categoryList, setCategory] = useState(initialstate);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gettodosWithaxios();
  }, []);

  const gettodosWithaxios = async () => {
    const response = await axiosclient.get('/todos');
    setUserData(response.data);
  };

  function _onCategoryClicked(){
    alert('Category click')
  };

  return (
    <>
      <Header />
      <div className="offers" style={{textAlign: 'center', color: '#c8102e',fontSize: '1.1em', fontWeight: '600'}}>
        IN-STORE & CURBSIDE PICKUP: shop online & pick up in store for free! Shop now 
      </div>
      <div className="container" style={{width: '80%', margin: '0 auto', position: 'relative'}}>
        <div className="promo-front" style={{width: '95%', margin: '0 auto'}}>
          <img src={ require('../assets/images/WEB-1407965-July22_HP-SLDR_SummerDeals_DT.png') } style={{width: '100%', marginTop: '10px'}} alt="" />
          <div style={{display: 'flex', flexDirection: 'column', alignTtems: 'center',position: 'absolute', top: '10%', left: '35%', fontSize: '0.8em', color: 'white'}}>
            <h2>Summer fun deals!</h2>
            <span style={{marginTop: '-10px'}}>Save on toys, toppers, aquariums, treats & more</span>
            <button style={{padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', fontWeight: '700'}}>Shop now</button>
          </div>
        </div>
        <div className="bottom-offers" style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignTtems: 'center', gap: '10px'}}>
            <img src={ require('../assets/images/WEB-1407965-July22_HP-CAT_DogToys_DT.jpg')} style={{width: '100%' }} alt=""/>
              <span>Dog toys under $10</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <img src={ require('../assets/images/WEB-1407965-July22_HP-CAT_DogTreats_DT.jpg')} style={{width: '100%'}} alt="" />
              <span>Dog toys under $5</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <img src={ require('../assets/images/WEB-1407965-July22_HP-CAT_CatFood_DT.jpg')} style={{width: '100%'}} alt="" />
              <span>Wet cat food under $1.50</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <img src={ require('../assets/images/WEB-1407965-July22_HP-CAT_AquaticDecor_DT.jpg')} style={{width: '100%'}} alt="" />
              <span>Aquatic decor under $10</span>
          </div>
        </div>
        <div className="pets">
          <h2>Shop by pet</h2>
          <div className="pets-images" style={{display: 'flex', gap: '10px'}}>
            {/* loop on categoryList */}
            {
              categoryList ? (
                categoryList.map((ele, id) => {
                  return <Category item={ele} onItemClicked={() => this._onCategoryClicked()}  key={id}/> 
                })
              )
              :
              (
                "Data Not Found"
              )
            }
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
}

export default Home;