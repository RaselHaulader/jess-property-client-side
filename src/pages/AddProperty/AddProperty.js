import React from 'react';
import Header from '../Header/Header';

const AddProperty = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div>
                    <p>Home &gt; Add Property</p>
                </div>
                <h3>Add Property</h3>
                <div className='row w-100'>
                    <div className='col-12 col-md-8'>
                        <div>
                            <h3>Basic Info</h3>
                            <input type="\" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Location</h3>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Price</h3>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Photos</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <button>Submit</button>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div>
                            <p>check progress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;