import React from 'react';
import { Link } from 'react-router-dom';

const HomePackageCard = (props) =>  {
    const {name,price,img} = props.Package || {};
    return (
        <div className=" col-lg-4 col-md-6 col-sm-12 g-2">
            <div class="card" style={{"width": "23rem"}}>
                        <img src={img} className="card-img-top w-100 d-flex justify-content-center" alt="..."/>
                        <div class="card-body">
                      <h4 class="card-title text-center">{name}</h4>
                      <h5 class="card-title text-center">Starting From : <span className="text-primary">{price} </span>Tk</h5>
                     <div className="text-center">
                     <Link to={`/package/packageregister`} class="btn button fw-bold bg-primary text-white" ><i class="fas fa-route"></i> Book Now</Link>
                     </div>
                  </div>
                        
            </div>
        </div>
    );
};

export default HomePackageCard;