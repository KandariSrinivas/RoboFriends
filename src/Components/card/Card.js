import React from 'react';
import "./Card.css";
var Card = ({ name, email, phone, website }) => (
    <div className="card" style={{width: "18rem",}}>
        <img src= {`https://robohash.org/${name}`} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <p className="card-text">Email: {email} <br/> Phone: {phone}</p>
            <a href={website} className="btn btn-primary">Visit Site</a>
        </div>
    </div>
);

export default Card;
