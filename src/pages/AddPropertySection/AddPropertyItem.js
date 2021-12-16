import React from 'react';

const AddPropertyItem = ({title,info,img,btn}) => {
    return (
        <div>
             <div className="cardItem">
                    <img src={img} alt=""/>
                    <h4>{title}</h4>
                    <p className='my-4'>{info}</p>
                    <button>{btn}</button>
                </div>
        </div>
    );
};

export default AddPropertyItem;