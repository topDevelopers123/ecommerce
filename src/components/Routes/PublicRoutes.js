import Login from "../login/login";
import About from "../about/about"
import Products from "../Products/Products"
import ProductDetails from "../productDetails/productDetail"
import ContactUs from "../contact/ContactUs"
import Register from "../register/register"
import PrivacyPolicy from "../footer/PrivacyPolicy"
import TermsAndConditions from "../footer/TermsAndConditions"
import RefundsCancellation from "../footer/RefundsCancellation"
import Email_verify from "../login/Email_verify"
import Change_password from "../login/Change_password"


export const PublicRoute = [

    {
        path: "/login",
        element: <Login />
    }
    ,
    {
        path: "/about",
        element: <About />
    }
    ,
    {
        path: "/products",
        element: <Products />
    }
    ,
    {
        path: "/productdetails/:id",
        element: <ProductDetails />
    }
    ,
    {
        path: "/contact",
        element: <ContactUs />
    }
    ,
    {
        path: "/register",
        element: <Register />
    }
    ,
    {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />
    }
    ,
    {
        path: "/TermsAndConditions",
        element: <TermsAndConditions />
    }
    ,
    {
        path: "/RefundsCancellation",
        element: <RefundsCancellation />
    }
    ,

    {
        path: "/emailVerify",
        element: <Email_verify />
    }
    ,
    {
        path: "/Change_password",
        element: <Change_password />
    }
]