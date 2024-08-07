import React, { useCallback, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import logo from './header_images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import "./Header2.css";
import { useAuthContext, useCartContext, useProductContext, useWishlistContext } from '../../Context/index.context';
import CategoryPage from './CategoryPage';
import toast from 'react-hot-toast';

const Header2 = () => {
    const { authorizeToken, getUser } = useAuthContext();
    const { wishlistLength } = useWishlistContext();
    const { cartLength } = useCartContext();
    const { productData } = useProductContext();
    const [Searchdata, setSearchData] = useState([]);
    const [searchToggle, setSearchToggle] = useState(false);
    const naviate = useNavigate();
    const [search, setSearch] = useState('');
    const [toggle, setoggle] = useState(false);

    const handleLogout = () => {
        confirmAlert({
            title: 'Confirm to logout',
            message: 'Do you really wants to logout?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        toast.success('Logout successful!');
                        localStorage.clear();
                        window.location.href = '/';
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    };

    const handleSearch2 = useCallback(
        (e) => {
            const { value } = e.target;
            setSearch(value);

            if (value && productData) {
                const normalizedValue = value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
                const filter = productData.filter((item) => {
                    const categoryMatch = item?.title?.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(normalizedValue);
                    return categoryMatch;
                });
                setSearchData(filter);
            } else {
                setSearchData(null);
            }
        },
        [productData]
    );

    const MainCategorySearchHandler = (e, main, sub_category, sunInnercategory) => {
        e.stopPropagation();
        naviate(`/products/?category=${main}&&subcategory=${sub_category}&&sunInnercategory=${sunInnercategory}`);
    };

    const handleSearch = () => {
        naviate(`/products?search=${search}`);
        setSearchData(null);
    };

    const handleSearchKey = (e) => {
        if (e.key === 'Enter') {
            naviate(`/products?search=${search}`);
            setSearchData(null);
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <header className='flex position-sticky sticky-top bg-[#4D869C] justify-between items-center md:px-5 py-2'>
                <Link to='/' className='h-12 sm:h-16' onClick={scrollToTop}>
                    <img src={logo} className='size-full' alt='logo' />
                </Link>

                <div className={`${searchToggle ? 'block absolute w-full top-20 z-50' : 'hidden w-3/6 md:block md:relative'} `}>
                    <input
                        type='text'
                        value={search}
                        onKeyDown={handleSearchKey}
                        placeholder='Search Here ...'
                        onChange={(e) => {
                            setSearch(e.target.value.toLowerCase());
                            handleSearch2(e);
                        }}
                        className='py-2 px-4 w-full rounded-full shadow-lg'
                    />
                    <span className='absolute top-2 right-4 font-bold' onClick={handleSearch}>
                        <i className='bi bi-search'></i>
                    </span>
                    <div className='bg-white shadow-md absolute top-full rounded-md w-full md:w-2/3 z-50'>
                        {Searchdata?.map((item, i) => (
                            <p
                                className='px-3 py-1 cursor-pointer'
                                key={i}
                                onClick={() => {
                                    naviate(`/productdetails/${item._id}`);
                                    setSearch('');
                                    setSearchData(null);
                                }}
                            >
                                {item?.title}
                            </p>
                        ))}
                    </div>
                </div>

                <div className='flex-shrink-0 flex px-2 py-3 items-center space-x-8'>
                    {authorizeToken ? (
                        <div className='flex gap-2'>
                            <span
                                onClick={() => setSearchToggle(!searchToggle)}
                                className='flex md:hidden text-xl md:text-2xl text-white flex-col justify-center items-center'
                            >
                                <i className='bi bi-search'></i>
                                <span className='text-xs font-normal'>Search</span>
                            </span>
                            <Link to='/wishlist' className='text-xl md:text-2xl text-white relative flex flex-col justify-center items-center md:px-2'>
                                <i className='bi bi-suit-heart'></i>
                                <span className='absolute -top-2 right-0 h-5 w-5 rounded-full flex items-center justify-center bg-[#CDE8E5] text-sm text-black font-medium'>
                                    {wishlistLength}
                                </span>
                                <span className='text-xs font-normal'>Wishlist</span>
                            </Link>
                            <Link to='/cart' className='relative text-xl md:text-2xl text-white flex flex-col justify-center items-center md:px-2'>
                                <i className='bi bi-cart3'></i>
                                <span className='absolute -top-2 -right-1 h-5 w-5 rounded-full flex items-center justify-center bg-[#CDE8E5] text-sm text-black font-medium'>
                                    {cartLength}
                                </span>
                                <span className='text-xs font-normal'>Cart</span>
                            </Link>
                            <span
                                className='text-xl md:text-2xl cursor-pointer text-white flex flex-col justify-center items-center'
                                onClick={() => setoggle(!toggle)}
                            >
                                <i className='bi bi-person-circle'></i>
                                <span className='text-xs font-normal'>Profile</span>
                                <div className={`${toggle ? 'block' : 'hidden'}  bg-white profileDiv shadow overflow-hidden absolute top-20 right-5 rounded-xl py-2 px-1 sm:w-52 w-[8rem] z-50`}>

                                    <div className='userProfile w-full text-sm sm:text-lg py-2 px-3 cursor-text '>
                                        <div>
                                            <div className="usershape">
                                                <div className="usercircle"></div>
                                            </div>

                                            <div className='profileImg '>
                                                <p ><i className="bi bi-person-circle"></i></p>
                                            </div>

                                            <div className='userName'>
                                                <p> {getUser?.name}</p>
                                            </div>

                                            <div className='userEmail'>
                                                <p >{getUser?.email}</p>
                                            </div>
                                        </div>

                                    </div>

                                    <button
                                        className='w-full text-sm sm:text-lg flex justify-evenly py-2 text-[#676767] border-bottom border-[#e7e7e7] m-0 hover:bg-gray-300 duration-150 p-0 text-start px-2 rounded-e-md'
                                        onClick={() => {
                                            naviate('/track_order');
                                            setoggle(false);
                                        }}
                                    >
                                        <i className='bi bi-box-seam text-black'></i> Orders &gt;
                                    </button>
                                    <button
                                        className='w-full text-sm sm:text-lg border-bottom border-[#e7e7e7] py-2 flex justify-evenly text-[#676767] m-0 hover:bg-gray-300 duration-150 p-0 text-start px-2'
                                        onClick={() => {
                                            naviate('/wishlist');
                                            setoggle(false);
                                        }}
                                    >
                                        <i className='bi bi-heart text-black'></i> Wishlist &gt;
                                    </button>
                                    <button
                                        className='w-full text-sm sm:text-lg flex justify-evenly border-bottom border-[#e7e7e7] py-2 text-[#676767] m-0 hover:bg-gray-300 duration-150 p-0 text-start px-2'
                                        onClick={() => {
                                            naviate('/savedAddress');
                                            setoggle(false);
                                        }}
                                    >
                                        <i className='bi bi-house-door text-black'></i> Address &gt;
                                    </button>
                                    <button
                                        className='w-full text-sm sm:text-lg flex justify-evenly border-bottom border-[#e7e7e7] py-2 text-[#676767] m-0 hover:bg-gray-300 duration-150 p-0 text-start px-2'
                                        onClick={() => {
                                            naviate('/changePassword');
                                            setoggle(false);
                                        }}
                                    >
                                        <i className='bi bi-lock text-black'></i> Password &gt;
                                    </button>
                                    <button
                                        className='w-full text-sm sm:text-lg flex justify-evenly py-2 text-[#676767] m-0 hover:bg-gray-300 duration-150 p-0 text-start px-2'
                                        onClick={handleLogout}
                                    >
                                        <i className='bi bi-box-arrow-right text-black'></i> Logout
                                    </button>
                                </div>
                            </span>
                        </div>
                    ) : (
                        <>
                            <Link
                                to='/login'
                                className='text-white hover:bg-indigo-200 hover:text-black inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md shadow-sm'
                            >
                                Login
                            </Link>
                            <Link
                                to='/register'
                                className='text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm'
                            >
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </header>
            <CategoryPage />
        </>
    );
};

export default Header2;






