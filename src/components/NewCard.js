
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import "./NewCard.css";


const NewCard = ({ fields, id }) => {

    const { name, vaccines } = fields;
    return (<>
        <div className="container" >
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h3>{name}</h3>
                        <p>
                            # vaccines: {vaccines ? vaccines.length : "0"}</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default NewCard;
