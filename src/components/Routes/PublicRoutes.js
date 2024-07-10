import Login from "../login/login";
import About from "../about/about"
import Products from "../Products/Products"
import ProductDetails from "../productDetails/productDetail"
import ContactUs from "../contact/ContactUs"
import Register from "../register/register"
import PrivacyPolicy from "../footer/PrivacyPolicy"
import TermsAndConditions from "../footer/TermsAndConditions"
import Email_verify from "../login/Email_verify"
import OtpVerify from '../login/Otp_verify'
import Change_password from "../login/Change_password"
import New_password from '../login/New_password'
import ReturnCancellation from "../footer/ReturnCancellation";


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
        path: "/ReturnCancellation",
        element: <ReturnCancellation />
    },
    {
        path: "/emailVerify",
        element: <Email_verify />
    }
    ,
    {
        path: "/Change_password",
        element: <Change_password />
    }
    ,
    {
        path: "/otpVerify",
        element: <OtpVerify />
    },
    {
        path: "/newPassword",
        element: <New_password />
    }
    
]