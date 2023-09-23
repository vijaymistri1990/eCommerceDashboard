import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [productlist, setProductlist] = useState([]);

  

  const getProduct = () => {
    axios.get("http://localhost:4200/getproduct").then((result) => {
      setProductlist(result.data);
    });
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4200/getproduct/${id}`);
    getProduct();
  };

  const handleSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4200/search/${key}`);
      result = await result.json();
      if (result) {
        setProductlist(result);
      } else {
        setImmediate(productlist)
      }
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container mt-4 w-50">
        <div className="input-group mb-3">
          <input type="text" onChange={handleSearch} className="form-control" placeholder="Search product here..." />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th>Remove Product</th>
            </tr>
          </thead>
          {productlist.length > 0
            ? productlist.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.cetagory}</td>
                      <td>{item.company}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProduct(item._id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </button>
                        <Link to={`/updateproduct/${item._id}`} state={{ item }}>
                          <button className="btn btn-primary m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })
            : "No data available"}
        </table>
      </div>
    </>
  );
};

export default Productlist;
