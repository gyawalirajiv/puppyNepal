import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axiosclient from "../util/axiosClient";
import Header from "components/Header";
import Footer from "components/Footer";

function List() {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    gettodosDataWithaxios();
  }, []);

  const gettodosDataWithaxios = async () => {
    const response = await axiosclient.get('/products/' + id + '/category');
    setProductData(response.data);
  };


  return (
    <>
    <Header />
      {
        productData ? (
          productData.map((ele, idx) => {
            return (
              <div>
                <p>ID: {ele.id}</p>
                <p>Title: {ele.title} </p>
                <p>UserId: {ele.userId} </p>
              </div>
            )
          })
        ) : (
          "Data not Found"
        )
      }
      <Footer />
    </>
  )
}

export default List;