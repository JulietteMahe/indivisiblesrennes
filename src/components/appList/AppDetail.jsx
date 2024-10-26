import React, { useState } from 'react';
import './AppDetail.css';

const AppDetail = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);


    return (
        <div className="AppDetail" onClick={() =>setShowModal(!showModal)}>
                    <a className="mainImgA" >                    
                       <img className="mainImg" src={props.globalpic1} alt={props.description} />
                    </a>
                    {showModal == true ? 
                                <div className="modal" >
                                    <div className="modalInfo">
                                        <div className="modalLinks">
                                            <a href={props.link1} target="_blank" rel="noreferrer" className="postLink" >{props.linkdesc1}</a>
                                            <a href={props.link2} target="_blank" rel="noreferrer" className="postLink" >{props.linkdesc2}</a>
                                            <a href={props.link3} target="_blank" rel="noreferrer" className="postLink" >{props.linkdesc3}</a>
                                            <a href={props.link4} target="_blank" rel="noreferrer" className="postLink" >{props.linkdesc4}</a>
                                            <a href={props.link5} target="_blank" rel="noreferrer" className="postLink" >{props.linkdesc5}</a>
                                        <a href={props.link6} target="_blank" className="postLink">{props.linkdesc6}</a>
                                        </div>
                                        <div className="modalClose" onClick={() => setCloseModal(!closeModal)}>x</div>
                                    </div>
                                </div> 
                              :
                              <div></div> }

        </div>
    )
}

export default AppDetail;