import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router';
import axiosclient from "../util/axiosClient";
import Header from "components/Header";
import Footer from "components/Footer";
import randomIntFromInterval from "util/randNumber";

function List() {
  const { id, title } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    gettodosDataWithaxios();
  }, []);

  const gettodosDataWithaxios = async () => {
    const response = await axiosclient.get('/products/' + id + '/category');
    setProductData(response.data);
  };

  function _onClickProduct(item){
    navigate('/details/'+item.productId)
  }


  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: 'center' }}> <h3> Showing Results Under <i>{title}</i> Category </h3></div>
      <div style={styles.gridContainer} >
        {
          productData ? (
            productData.map((ele, idx) => {
              return (
                <div style={styles.gridDivContainer} key={idx}>
                  <div style={{ border: '0px solid' }}>
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                      <div
                        style={{
                          width: "252.8px",
                          height: "252.8px",
                          margin: "10px",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={ele.image}
                          style={{ width: "252.8px", height: "252.8px", cursor: 'pointer' }}
                          onClick={() => _onClickProduct(ele)}
                        />
                      </div>
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: "bold", cursor: 'pointer' }} onClick={() => _onClickProduct(ele)}>
                      {ele.title}
                    </div>
                    <div style={{ gap: "10px" }}>
                      <span id="price" style={{ color: "#e52823" }}>
                        {" "}
                        ${ele.price}
                      </span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        Price $ { randomIntFromInterval(ele.price) }
                      </span>
                    </div>
                    <h5>
                      { ele.description.substr(0, 40)+'.....' }
                    </h5>
                  </div>
                </div>
              )
            })
          ) : (
            "Data not Found"
          )
        }
      </div>


      <Footer />
    </>
  )
}

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto',
    gridGap: '10px',
    padding: '10px',
    gridAutoFlow: 'row',

  },
  gridDivContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '30px'
  }
};

export default List;