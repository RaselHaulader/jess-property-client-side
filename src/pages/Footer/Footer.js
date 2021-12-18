import React from 'react';
import './FooterStyle.css';

const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer-glob container p-5">
            <div className="row  mt-4 footer-info">
                <div className="col-12 col-md-4">
                    <h5 className='text-danger'>Property Bazar</h5>
                    <p>We are committed to provide reliable and suitable property according to your budget. We gather here all the verified and authentic property so confidently you can choose any one.</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Our Partner</h5>
                    <p>Shah Builders</p>
                    <p>Peach Property</p>
                    <p>Land sell bazar </p>
                    <p>Apartment team KH</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Menu</h5>
                    <p>Home</p>
                    <p>About</p>
                    <p>My Orders</p>
                    <p>Clients</p>
                </div>
                <div className="col-12 col-md-4">
                    <h5 className="mb-4">Contact with us</h5>
                <div className="row w-100 mx-auto ">
                    <div className="col-12 p-3 call-number  ps-3 d-flex justify-content-center flex-column">
                        <h6 className="p-0 fw-bolder m-0"> Call us: +008 98 3445 54</h6>
                        <h6 className="my-2 fw-bold">Email: contact@info.com</h6>
                    </div>
                </div>
               
                <h3 className="my-2 fw-bold"><i className="fab fa-facebook"></i> <i className="fab fa-instagram"></i> <i className="fab fa-whatsapp"></i> <i className="fab fa-twitter"></i></h3>
                </div>
            </div>
            <div className="container mx-auto ">
            </div>
            <p className="text-center mt-3">©All copy right reserved by Russel2021</p>
        </div>
    </div>
    );
};

export default Footer;