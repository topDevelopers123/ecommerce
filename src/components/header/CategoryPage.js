import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import { useCategoryContext } from "../../Context/index.context";

function CategoryPage() {
    const [data,setData]= useState(null)
    const { category } = useCategoryContext()

  return (
    <div>
          <div className="container-fluid">
              <div className="container">
                  <div className="row category_main_div">
                      <div className="col-12 d-flex justify-content-around category_mini_div">

                          {category?.map((maincategory, i) => (
                            <div key={i} className="mt-3  text-center ">
                              <div className="mens_cate ">
                                  <img
                                      src="https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg"
                                      alt=""
                                  />
                                  <h6 className="mt-2 m-0">{maincategory.category_name}</h6>
                              </div>
                              <div className="sub_categeries  w-100 ">
                                  {maincategory.Subcategory.map((subcat, i) => (<div key={i} className="sub_mega  col-4">
                                      <h4 className="mt-2">{subcat.sub_category_name}</h4>
                                      <ul className="p-0">
                                          {subcat.InnerCategory.map((item, i) => (

                                              <li key={i}>{item.sub_inner_category_name}</li>

                                          ))}
                                      </ul>
                                  </div>))}
                              </div>
                          </div>))}
                          
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default CategoryPage;
