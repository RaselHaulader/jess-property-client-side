import React from 'react';
import { Link } from 'react-router-dom';

const AddPropertyItem = ({ title, info, img, btn,link }) => {
    return (
        <Link className='text-decoration-none text-dark' to={`/${link}`}>
            <div>
                <div className="cardItem">
                    <img src={img} alt="" />
                    <h4 className='py-2 pt-4'>{title}</h4>
                    <p className='my-4'>{info}</p>
                    <button>{btn}</button>
                </div>
            </div>
        </Link>
    );
};

export default AddPropertyItem;