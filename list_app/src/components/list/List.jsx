import React, {useState} from "react";
import './List.css'
import closeIcon from '../images/close.png'


function List(props) {

  // Modal state

    const [modal, setModal] = useState(false);
    
  // Toggle modal function

    const toggleModal = () => {
      setModal(!modal);
    };

  // Styles for background  

    const styles = {
        background: props.color
    }

  // Font color in modal

    const stylesModal = {
      color: props.color
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
      
    return(
    <div   className="list-table">
        <div style={styles} className="list-container">
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h1>DETAILS</h1>
            </div>
          <div className="container-info-modal">
            <h1 className="modal-info">ID: {props.id}</h1>
            <h1 className="modal-info">NAME: {props.title}</h1>
            <h1 className="modal-info">YEAR: {props.year}</h1>
            <h1  className="modal-info">COLOR: <span style={stylesModal}>{props.color}</span></h1>
            <h1 className="modal-info" >PANTONE: {props.pantone}</h1>
                    </div>
            <button className="close-modal" onClick={toggleModal}>
              <img className="close-modal-icon" src={closeIcon}/>
            </button>
          </div>
        </div>
      )}
      <div onClick={toggleModal} className="list-info">
        <div className="list-id">
            <p>{props.id}</p>
        </div>
        <div className="list-name">
            <p>{props.title}</p>
        </div>
        <div className="list-year">
            <p>{props.year}</p>
         </div>
      </div>
            
        </div>
        </div>
    )
}

export default List