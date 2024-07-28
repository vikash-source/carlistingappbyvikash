import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Filter(props) {
    const [value,setValue]=useState({make:"",model:"",year:"",search:"",sortKey:""})

    const handlechnage=(e)=>{
      setValue((val) => ({ ...val, [e.target.name]: e.target.value }));
    }
    const handlesubmit = ()=>{
     props.handlefilter(value);
    }
    const handleclear = ()=>{
      let val={make:"",model:"",year:"",search:"",sortKey:""}
      setValue(val)
      props.handlefilter(val);
     }
     const years = Array.from({ length: 2024 - 2000 + 1 }, (_, index) => 2000 + index);
     const models = ["Swift","Viper","Mach-E","Telluride","X2","FF","Mulsanne"];
     const makes = ["Suzuki","Baluno Motors","Ford","Kia","Breza Motors","Ferrari","Bentley"];
  return (
    <div className="left-side-menu">
    <div className="row">
      <div className="col-lg-12 col-md-6 col-6">
        <div className="form-group select_car">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Select Car Make
          </label>
          <select className="form-select" name='make' onChange={handlechnage}>
            <option value="">Select</option>
            {makes?.map((val,i)=>(
              <option key={i} value={val} selected={value.make== val ? true : false}>{val}</option>
            ))}
            
          </select>
        </div>
      </div>
      <div className="col-lg-12 col-md-6 col-6">
        <div className="form-group select_car">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Select Model
          </label>
          <select className="form-select" name='model' onChange={handlechnage}>
            <option value="">Select</option>
            {models?.map((val,i)=>(
              <option key={i} value={val} selected={value.model== val ? true : false}>{val}</option>
            ))}
            
          </select>
        </div>
      </div>
      <div className="col-lg-12 col-md-6 col-6">
        <div className="form-group select_car">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Select Years
          </label>
          <select className="form-select" name='year' onChange={handlechnage}>
            <option value="">Select</option>
            {years?.map((val,i)=>(
              <option key={i} value={val} selected={value.year== val ? true : false}>{val}</option>
            ))}
            
          </select>
        </div>
      </div>
      <div className="col-lg-12 col-md-6 col-6">
        <div className="form-group select_car">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Short By
          </label>
          <select className="form-select" name='sortKey' onChange={handlechnage}>
            <option value="">Select</option>
            <option  value="price" selected={value.sortKey=== "price" ? true : false}>Price</option>
          </select>
        </div>
      </div>
     
      <div className="col-lg-12 col-md-6 col-6">
        <div className="form-group select_car">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name ..."
            onChange={handlechnage}
            name='search'
            value={value.search?value.search:""}
          />
        </div>
      </div>
      <div className="col-lg-12 ">
        <div className="text-center form-group select_car d-flex">
          <Link to="#" className="btn brand_btn" onClick={handlesubmit}>
            Search
          </Link>
          <Link to="#" className="btn brand_btn" style={{ marginLeft: 4 }} onClick={handleclear}>
            Clear
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
