import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Updateproduct = () => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [cetagory, setcetagory] = useState([]);
  const [company, setCompany] = useState([]);
  const [product, setProduct] = useState({});
  let Id = useParams();
  const navigate = useNavigate()
  const location = useLocation()
  console.log(product.cetagory)
  useEffect(() => {
    setProduct(location.state.item)
    setName(product.name)
    setPrice(product.price)
    setcetagory(product.cetagory)
    setCompany(product.company)
  }, [product])

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4200/get-singleproduct/${Id.id}`)
  //     .then((result) => {
  //       setName(result.data.name);
  //       setPrice(result.data.price);
  //       setcetagory(result.data.cetagory);
  //       setCompany(result.data.company);
  //     });
  // }, [Id]);

  const updateproduct = async () => {
    let result = await fetch(
      `http://localhost:4200/update-singleproduct/${Id.id}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, cetagory, company }),
        headers: { "Content-type": "application/json" },
      });
    result = result.json();
    navigate('/')
  };

  return (
    <>
      <form>
        <div className="container justify-content-center align-items-center w-50 mt-4">
          <div className="form-group row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Price
            </label>
            <div className="col-sm-10 mt-2">
              <input
                type="text"
                name="price"
                className="form-control form-control-sm"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              cetagory
            </label>
            <div className="col-sm-10 mt-2">
              <input
                type="text"
                name="cetagory"
                className="form-control form-control-sm"
                onChange={(e) => setcetagory(e.target.value)}
                value={cetagory}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Company
            </label>
            <div className="col-sm-10 mt-2">
              <input
                type="text"
                name="company"
                className="form-control form-control-sm"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateproduct}
          >
            Upddate product
          </button>
        </div>
      </form>
    </>
  );
};

export default Updateproduct;
