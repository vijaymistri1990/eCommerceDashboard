import axios from "axios";
import { useFormik} from "formik";
import React from "react";
import * as Yup from "yup";

const Addproduct = () => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      cetagory: "",
      company: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Product name must required"),
      price: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Product price must required"),
      cetagory: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Product cetagory must required"),
      company: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Product company must required"),
    }),
    onSubmit: (value,{resetForm}) => {
      axios.post("http://localhost:4200/add-product", value).then((result) => {
        const addProduct = result.data;
        resetForm({values : ''})
      });
  
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
                placeholder="Enter product Name.."
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
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
                placeholder="Enter product Price.."
                onChange={formik.handleChange}
                value={formik.values.price}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Category
            </label>
            <div className="col-sm-10 mt-2">
              <input
                type="text"
                name="cetagory"
                className="form-control form-control-sm"
                placeholder="Enter product Category.."
                onChange={formik.handleChange}
                value={formik.values.cetagory}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cetagory && formik.errors.cetagory ? (
                <div>{formik.errors.cetagory}</div>
              ) : null}
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
                placeholder="Enter product Company.."
                onChange={formik.handleChange}
                value={formik.values.company}
                onBlur={formik.handleBlur}
              />
              {formik.touched.company && formik.errors.company ? (
                <div>{formik.errors.company}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary">
            Add product
          </button>
        </div>
      </form>
    </>
  );
};

export default Addproduct;
