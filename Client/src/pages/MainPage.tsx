//import { useState, useEffect, MouseEventHandler } from "react";
//import { Link } from "react-router-dom";
import { getBook } from "../api/bookAPI";
const MainPage = () => {
  (async () => {
    const data = await getBook(123456);
    console.log(data);    
  })();
  return (
    <div className="main-list">
     <h1>main page</h1>
    </div>
  )
};

export default MainPage;
