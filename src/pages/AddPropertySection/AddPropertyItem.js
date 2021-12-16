import React from 'react';

const AddPropertyItem = ({title,info,img,btn}) => {
    return (
        <div>
             <div className="cardItem">
                    <img src={img} alt=""/>
                    <h2>{title}</h2>
                    <p>{info}</p>
                    <button>{btn}</button>
                </div>
        </div>
    );
};

export default AddPropertyItem;