import React, { useState, useRef } from 'react';
import './Detail.css';

const AppDetail = (props) => {

    const [showModal, setShowModal] = useState(false);
    const myModal = useRef(null);

    let windowFeatures = "popup,top=0,left=0,width=320,height=320";
    let windowFeat = "popup,top=0,left=320,width=320,height=320";

    const handleClick = (event) => {
            event.preventDefault(); 
            window.open(event.target.href, '_blank', /*'noopener,noreferrer'*/ windowFeatures);
            window.open(event.target.href, '_blank', /*'noopener,noreferrer'*/ windowFeat);
    };

    const closeModal = (event) => {
            setShowModal(false);
            myModal.current.remove();
    };

    return (
        <div className="AppDetail" onClick={() =>setShowModal(true)}>
                    <a className="mainImgA" >                    
                       <img className="mainImg" src={props.globalpic1} alt={props.description} />
                    </a>
                    {showModal === true ? 
                                <div className="modal" ref={myModal}  >
                                    <div className="modalInfo">
                                        <div className="modalLinks">
                                            <a href={props.linkArcom} onClick={handleClick} className="postLink" >SIGNALER A L'ARCOM</a>
                                        </div>
                                        <div className="modalClose" onClick={() =>closeModal()}>x</div>
                                    </div>
                                </div> 
                              :
                              <div></div> }

        </div>
    )
}

export default AppDetail;