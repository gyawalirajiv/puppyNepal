import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Category from "../components/Category";
import axiosclient from "../util/axiosClient";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "components/Card";

let initialStateCategory = [
  { title: 'Dog', imgURL: 'WEB-1178113-Jan22_DEAL1_Dog.jpg' },
  { title: 'Cat', imgURL: 'WEB-1178113-Jan22_DEAL2_Cat.jpg' },
  { title: 'Fish', imgURL: 'WEB-1178113-Jan22_DEAL3_Fish.jpg' },
  { title: 'Bird', imgURL: 'WEB-1178113-Jan22_DEAL4_Bird.jpg' },
  { title: 'Reptile', imgURL: 'WEB-1178113-Jan22_DEAL5_Reptile.jpg' },
  { title: 'Small Pet', imgURL: 'WEB-1178113-Jan22_DEAL6_SmPet.jpg' }
]
let initialStateCard = [
  { title: 'Dog toys under $10', imgURL: 'WEB-1407965-July22_HP-CAT_DogToys_DT.jpg' },
  { title: 'Dog toys under $5', imgURL: 'WEB-1407965-July22_HP-CAT_DogTreats_DT.jpg' },
  { title: 'Wet cat food under $1.50', imgURL: 'WEB-1407965-July22_HP-CAT_CatFood_DT.jpg' },
  { title: 'Aquatic decor under $10', imgURL: 'WEB-1407965-July22_HP-CAT_AquaticDecor_DT.jpg' },
]

function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [categoryList, setCategory] = useState([]);
  const [cardList, setCardList] = useState(initialStateCard);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gettodosWithaxios();
  }, []);

  const gettodosWithaxios = async () => {
    const response = await axiosclient.get('/category');
    setCategory(response.data);
  };

  function _onCategoryClicked(item){
    navigate('/list/'+item.categoryId+"/"+item.title)
    // console.log('Category click', item )
  };
  function _onCardClicked(item){
    alert('card click')
    console.log('Card click', item )
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
          {
            cardList ? (
              cardList.map((e, i) => {
                return <Card item={e} onCardClicked={_onCardClicked.bind(this)}  key={i}/> 
              })
            ) :
            (
              "Data Not Found"
            )
          }

        </div>
        <div className="pets">
          <h2>Shop by pet</h2>
          <div className="pets-images" style={{display: 'flex', gap: '10px'}}>
            {/* loop on categoryList */}
            {
              categoryList ? (
                categoryList.map((ele, id) => {
                  return <Category item={ele} onCategoryClicked={_onCategoryClicked.bind(this)}  key={id} img={initialStateCategory[id]} /> 
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