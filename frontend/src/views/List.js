import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axiosclient from "../util/axiosClient";

function List(){
  const { id } = useParams();
  const [todoData, setTodoData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    gettodosDataWithaxios();
  }, []);

  const gettodosDataWithaxios = async () => {
    const response = await axiosclient.get('/todos/'+id);
    setTodoData(response.data);
  };


  return(
    <div>
      {
        todoData ? (
          <div>
          <p>ID: {todoData.id}</p>
          <p>Title: { todoData.title} </p>
          <p>UserId: { todoData.userId} </p>
          </div>
        ) : (
          "Data not Found"
        )
      }
    </div>
  )
}

export default List;