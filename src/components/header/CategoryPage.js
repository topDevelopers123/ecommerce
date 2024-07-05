import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import { useCategoryContext } from "../../Context/index.context";
import { useNavigate } from "react-router-dom";

function CategoryPage() {

    const navigate = useNavigate()
    const { category, showCategory } = useCategoryContext()




    // console.log("1", filterCategory)
    //     console.log("2",selectedSubCategory)
    //     console.log('3',selectedInnerCategory)

    const MainCategorySearchHandler = (e, main, sub_category, sunInnercategory) => {
        e.stopPropagation();

        navigate(`/products/?category=${main}&&subcategory=${sub_category}&&sunInnercategory=${sunInnercategory}`)
    }




    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row category_main_div">
                        <div className="col-12 d-flex justify-content-around category_mini_div">

                            {category?.map((maincategory, i) => (
                                <div key={i} onClick={(e) => MainCategorySearchHandler(e, maincategory.category_name)} className="mt-3  text-center col-4">

                                    <div className="mens_cate ">

                                        <img
                                            src={maincategory.image.image_url}
                                            alt=""
                                        />
                                        <h6 className="mt-2 m-0 text-center">{maincategory.category_name}</h6>
                                    </div>
                                    <div className="sub_categeries  w-100 ">
                                        {maincategory?.Subcategory?.map((subcat, j) => (
                                            <div key={j} onClick={(e) => MainCategorySearchHandler(e, maincategory.category_name, subcat.sub_category_name)}
                                                className="sub_mega col-4 ">
                                                {/* {console.log(subcat.sub_category_name)} */}
                                                <h4 className="mt-2" >{subcat?.sub_category_name}</h4>
                                                <ul className="p-0" >
                                                    {subcat?.InnerCategory?.map((item, k) => (

                                                        <li key={k} onClick={(e) => MainCategorySearchHandler(e, maincategory.category_name, subcat.sub_category_name, item?.sub_inner_category_name)}   >{item?.sub_inner_category_name}</li>

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
