
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NewCard.css";


const NewCard = ({ name, vaccines, id }) => {

    return (<>
        <div className="container" >
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h3>{name}</h3>
                        <p>
                            # vaccines: {vaccines}</p>

                            {/* <a href="#" className="custom-box-link">
                                <Link to={`/${id}`}>
                                    Read More</Link>
                            </a> */}

                            <Link to={`/${id}`} className="custom-box-link">
                                <a href="#">Read More</a>
                            </Link>

                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default NewCard;
