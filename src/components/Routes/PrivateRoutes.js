import Cart from "../Cart/Cart";
import OldAddress from "../checkout/OldAddress";
import TrackOrder from "../trackOrder/TrackOrder";
import Wishlist from "../wishlist/Wishlist";
import Thankyou from "../login/Thankyou"
import New_password from "../login/New_password"

export const PrivateRoutes = [
    {
        path: "/wishlist",
        element: <Wishlist />
    }
    ,
    {
        path: "/cart",
        element: <Cart />
    }
    ,
    {
        path: "/thankyou",
        element: <Thankyou />
    }
    ,
    {
        path: "/OldAddress",
        element: <OldAddress />
    }
    ,
    {
        path: "/track_order",
        element: <TrackOrder />
    }
    ,
    {
        path: "/newPassword",
        element: <New_password />
    }
    ,
]