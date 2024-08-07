import Cart from "../Cart/Cart";
import OldAddress from "../checkout/OldAddress";
import TrackOrder from "../trackOrder/TrackOrder";
import Wishlist from "../wishlist/Wishlist";
import New_password from "../login/New_password"
import Invoice from "../trackOrder/Invoice";
import SavedAddress from "../checkout/SavedAddress";
import Change_password from "../login/Change_password"

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
        path: "/OldAddress",
        element: <OldAddress />
    },
    {
        path: "/OldAddress/:product_id/:id?",
        element: <OldAddress />
    }
    ,
    {
        path: "/track_order",
        element: <TrackOrder />
    },
    {
        path: "/newPassword",
        element: <New_password />
    },
    {
        path: "/invoice",
        element: <Invoice />
    },
    {
        path: "/savedAddress",
        element: <SavedAddress />
    },
    {
        path: "/changePassword",
        element: <Change_password />
    }
]