import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import { useCategoryContext } from "../../Context/index.context";

function CategoryPage() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [selectedInnerCategory, setInnerCategory] = useState(null)

    const { category, showCategory } = useCategoryContext()

    showCategory(selectedCategory,selectedSubCategory,selectedInnerCategory)

  
//    console.log("1",selectedCategory)
//     console.log("2",selectedSubCategory)
//     console.log('3',selectedInnerCategory)





    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row category_main_div">
                        <div className="col-12 d-flex justify-content-around category_mini_div">

                            {category?.map((maincategory, i) => (
                                <div key={i} onClick={() => setSelectedCategory(maincategory._id)}  className="mt-3  text-center col-4">
                                    <div className="mens_cate ">
                                        
                                        <img
                                            src={maincategory.image.image_url}
                                            alt=""
                                        />
                                        <h6 className="mt-2 m-0">{maincategory.category_name}</h6>
                                    </div>
                                    <div className="sub_categeries  w-100 ">
                                            {maincategory?.Subcategory?.map((subcat, j) => (
                                                <div key={j} onClick={() => setSelectedSubCategory(subcat._id)}  className="sub_mega col-4">
                                            <h4 className="mt-2">{subcat.sub_category_name}</h4>
                                            <ul className="p-0" >
                                                {subcat.InnerCategory.map((item,k) => (

                                                    <li key={k} onClick={()=>setInnerCategory(item._id)}  >{item.sub_inner_category_name}</li>

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
