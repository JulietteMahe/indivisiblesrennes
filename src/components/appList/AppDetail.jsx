import React, { useState, useRef } from 'react';
import './Detail.css';

const AppDetail = (props) => {

    const [showModal, setShowModal] = useState(false);
    const myModal = useRef(null);

    const handleClick = (event) => {
            event.preventDefault(); 
            window.open(event.target.href, '_blank', 'noopener,noreferrer');
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
                                            <a href={props.link1} onClick={handleClick} className="postLink" >{props.linkdesc1}</a>
                                            <a href={props.link2} onClick={handleClick} className="postLink"  >{props.linkdesc2}</a>
                                            <a href={props.link3} onClick={handleClick} className="postLink" >{props.linkdesc3}</a>
                                            <a href={props.link4} onClick={handleClick} className="postLink" >{props.linkdesc4}</a>
                                            <a href={props.link5} onClick={handleClick} className="postLink" >{props.linkdesc5}</a>
                                            <a href={props.link6} onClick={handleClick} className="postLink">{props.linkdesc6}</a>
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