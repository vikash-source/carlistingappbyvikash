import React, {useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import carlist from '../../../Carlist.json';
import Pagination from "../../Paginate/Pagination";
import Norecord from './Norecord';
export default function Index() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 6;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cars?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,PageSize,cars]);

  const Searchbyfilter = (value)=>{
    const filteredCars = carlist?.cars
    ?.filter(car => {
      return (
        (value.search === '' || car.title.toLowerCase().includes(value.search.toLowerCase())) &&
        (value.year === '' || Number(car.year) === Number(value.year)) &&
        (value.model === '' || car.model.toLowerCase().includes(value.model.toLowerCase())) &&
        (value.make === '' || car.make.toLowerCase().includes(value.make.toLowerCase()))
      );
    })
    ?.sort((a, b) => {
      if (value.sortKey === 'price') {
          return Number(a.price) - Number(b.price);
      }
      return 0;
    });
  
    setCars(filteredCars);
  }

  const fetchData = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/65a934ac-50e4-4cbe-a8b2-bce229d66a3d');
      if (!response.ok) {
        console.log(response.statusText)
      }
      const result = await response.json();
      setCars(result.cars)
    } catch (error) {
      console.log(error.message);
    } finally {
      //if some case this api not work then use my own json file
      setCars(carlist?.cars);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
     <div className="p-0 storage_page"></div>
    <div className="container mt-4">
    <div className="d-flex align-items-start menu-button">
    <Filter handlefilter={Searchbyfilter}/>
      <div className="featured position-relative">
        <div className="sort_by d-flex justify-content-between">
        <div className="form-group feature_car d-flex align-items-center">
					<p className="form-label me-2 mb-0">All Car List</p>
				</div>

          <div className="result d-flex align-items-center">
            <p>Total {cars?.length} results</p>
          </div>
        </div>
        <div className="row">
          {currentTableData !==undefined && currentTableData.length > 0 && currentTableData.map((val,i)=>(
  <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
  <div className="premium_car pt-4">
    <div className="slick-content premium">
      <Link className='d-block w-100' to={`/cardetiels/${val.id}`}>
      <img src={val?.image} width={337} height={189} alt=''/>
      </Link>
     
      <div className="car-content">
        <h4>
          <Link to={`/cardetiels/${val.id}`}>{val?.title}</Link>
        </h4>
        <div className="car_manufacture">
          <span className="button_year">{val.year}</span>
          <span>{val.make}</span>
          <span>{val.model}</span>
        </div>
        <div className="selling_price">
          <p>Selling price</p>
          <h4>₹ {val.price}</h4>
        </div>
      </div>
    </div>
  </div>
</div>
          ))}


        {
          currentTableData?.length == 0  &&
          <Norecord/>
         
        }
         
        </div>
        <div className="page-up-down d-flex justify-content-center">
          <nav aria-label="Page navigation example">
             <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={cars?.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
         
          </nav>
        </div>
      </div>
    </div>
  </div>
 
  </>
  )
}
