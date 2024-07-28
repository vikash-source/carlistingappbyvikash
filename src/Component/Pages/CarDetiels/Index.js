import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carlist from '../../../Carlist.json';
import Norecord from '../CarList/Norecord';
export default function Index() {
  const [cars, setCars] = useState({});
  let param = useParams();
  const carid = param.id;

  useEffect(() => {
    const foundCar = carlist.cars.find(car => car.id == carid);
    setCars(foundCar);
  }, [carid]);
 
  return (
    <section className="storage_page">
    <div className="container">
      <div className="row colum-reverse">
      {
         !cars  ?
          <Norecord/>
         :
         <>
        <div className="col-lg-7">
          <div className="main_page position-relative">
            <div className="slider slider-for">
              <div className="product_large_img">
              <Carousel autoPlay={true} infiniteLoop={true}>
                {cars?.images?.map((val,i)=>(
                  <img key={i}
                  src={val}
                  className="img-fluid"
                  alt="product-image"
                />
                ))}
                
               
                </Carousel>
              </div>
            </div>
          
          </div>
          
          <div className="product-description mt-5">
						<h2>Description</h2>
						<p>{cars?.decrption}</p>
					</div>
        </div>
        <div className="col-lg-5">
          <div className="product-details">
            <h2>{cars?.title}</h2>
            <div className="car-bref d-flex aling-items-center">
              <p>{cars?.year}</p>
              <span />
              <p>{cars?.make}</p>
              <span />
              <p>{cars?.model}</p>
            </div>
            <div className="product-price d-flex align-items-center justify-content-between">
              <h2>₹ {cars?.price}</h2>
            </div>
            <div className="product_details mt-5">
              <h4>Details</h4>
              <ul>
                <li>Make:</li>
                <li>{cars?.make}</li>
                <li>Model:</li>
                <li>{cars?.model}</li>
                <li>Year:</li>
                <li>{cars?.year}</li>
                <li>Price:</li>
                <li>₹ {cars?.price}</li>
                <li>Specifications:</li>
                <li>{cars?.specifications}</li>
              </ul>
            </div>
            <div className="button-group d-flex">
							<Link to="/" className="btn brand_btn me-2"><i className="icofont-phone"></i>Back To Listing</Link>
						</div>
          </div>
        </div>
        </>
}
      </div>
    </div>
  </section>
  
  )
}
