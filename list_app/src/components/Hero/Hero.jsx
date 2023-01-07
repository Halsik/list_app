import React, {useState, useEffect} from "react";
import List from "../list/List";
import Pagination from "../Pagination/Pagination";

import './Hero.css'


function Hero(){

    const [idNumber, setIdNumber] = useState();
    const [api, setApi] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)


    const previousPage = () => {
        
        if(currentPage === 2) {
            setCurrentPage(1)
        } 
    }
  
      const nextPage = () => {
          
        if(currentPage === 1) {
            setCurrentPage(2)
        }
    }



  useEffect(() => {
    fetch("https://reqres.in/api/products")
    .then(res => res.json())
    .then(data => setApi(data.data))
}, [])



const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setIdNumber(value);
    console.log(idNumber)
  };
  
  
  
  const newArray = api.map(item => {
    if(idNumber === undefined || idNumber === '') {
       return  <List 
              key={item.id}
              title={item.name}
              color={item.color}
              id={item.id}
              year={item.year}
              pantone={item.pantone_value}
            />
            
        } else if(idNumber == item.id) {
            return  <List 
              key={item.id}
              title={item.name}
              color={item.color}
              id={item.id}
              year={item.year}
            />
        } })

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = newArray.slice(firstPostIndex, lastPostIndex)
  

    return(
        <div className="hero-container">
            <input placeholder="Search by ID" className="hero-input" value={idNumber} onChange={handleChange} />
            <div className="hero-table">
                <div className="table-header">
                    <div className="table-id">
                        <p className="table-text">ID</p>
                    </div>
                    <div className="table-name">
                        <p className="table-text">NAME</p>
                    </div>
                    <div className="table-year">
                        <p className="table-text">YEAR</p>
                    </div>
                </div>
                {idNumber === '' ? currentPost : newArray}
            </div>
            <Pagination 
                currentPage={currentPage}
                backFunction={previousPage}
                nextFunction={nextPage}
            />
        </div>
    )
}

export default Hero