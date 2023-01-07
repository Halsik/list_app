import React from "react";
import './Pagination.css'
import arrowLeft from "../images/arrow-left.png"
import arrowRight from "../images/arrow-right.png"


function Pagination(props) {


   


    return(

        <div className="pagination">
                <img className="pagination-icon" onClick={props.backFunction} src={arrowLeft}/>
                <p className="pagination-number">{props.currentPage}</p>
                <img className="pagination-icon" onClick={props.nextFunction} src={arrowRight}/>
        </div>
    )
}

export default Pagination