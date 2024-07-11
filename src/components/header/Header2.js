
import React, { useState, useEffect } from 'react';
import logo from "./header_images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext, useCartContext, useProductContext, useWishlistContext } from '../../Context/index.context';
import CategoryPage from './CategoryPage';
import toast from 'react-hot-toast';

const Header2 = () => {
    const { authorizeToken } = useAuthContext();
    const { wishlistLength } = useWishlistContext();
    const { cartLength } = useCartContext();
    const { productData } = useProductContext();
    const [searchData, setSearchData] = useState([]);
    const [searchToggle, setSearchToggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);
        const filter =
            value &&
            productData &&
            productData.filter((item) =>
                item.title
                    .toLowerCase()
                    .replace(/[^a-zA-Z0-9]/g, '')
                    .includes(value.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))
            );
        setSearchData(filter || null);
    };

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => setDropdownOpen(false), 200);
        setDropdownTimeout(timeout);
    };
    const logout = () => {
        localStorage.clear();
        // setIsLoggedIn(false);
        toast.success("Logout Successfully!");
        window.location.href = "/";
    };

    useEffect(() => {
        return () => {
            clearTimeout(dropdownTimeout);
        };
    }, [dropdownTimeout]);

    return (
        <>
            <header className='flex bg-[#4D869C] justify-between items-center md:px-5 py-2'>
                <Link to='/' className='h-12 sm:h-16'>
                    <img src={logo} className='size-full' alt='logo' />
                </Link>

                <div className={`${searchToggle ? 'block absolute w-full top-20 z-50' : 'hidden w-3/6 md:block md:relative'}`}>
                    <input
                        type='search'
                        placeholder='Search Here ...'
                        onChange={handleSearch}
                        className='py-2 px-4 w-full rounded-full shadow-lg'
                    />
                    <span className='absolute top-2 right-4 font-bold'>
                        <i className='bi bi-search'></i>
                    </span>
                    <div className='bg-white shadow-md absolute top-full rounded-md w-full md:w-2/3 z-50'>
                        {searchData?.map((item, i) => (
                            <p
                                className='px-3 py-1'
                                key={i}
                                onClick={() => {
                                    navigate(`/productdetails/${item._id}`);
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
                            <Link
                                to='/wishlist'
                                className='text-xl md:text-2xl text-white relative flex flex-col justify-center items-center md:px-2'
                            >
                                <i className='bi bi-suit-heart'></i>
                                <span className='absolute -top-2 right-0 h-5 w-5 rounded-full flex items-center justify-center bg-[#CDE8E5] text-sm text-black font-medium'>
                                    {wishlistLength}
                                </span>
                                <span className='text-xs font-normal'>Wishlist</span>
                            </Link>
                            <Link
                                to='/cart'
                                className='relative text-xl md:text-2xl text-white flex flex-col justify-center items-center md:px-2'
                            >
                                <i className='bi bi-cart3'></i>
                                <span className='absolute -top-2 -right-1 h-5 w-5 rounded-full flex items-center justify-center bg-[#CDE8E5] text-sm text-black font-medium'>
                                    {cartLength}
                                </span>
                                <span className='text-xs font-normal'>Cart</span>
                            </Link>
                            <div
                                className='relative'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className='text-xl md:text-2xl text-white flex flex-col justify-center items-center cursor-pointer'>
                                    <i className='bi bi-person-circle'></i>
                                    <span className='text-xs font-normal'>Profile</span>
                                </span>
                                {dropdownOpen && (
                                    <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50'>
                                        <Link to='/track_order' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                                            Orders
                                        </Link>
                                        <Link to='/wishlist' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                                            Wishlist
                                        </Link>
                                        <Link to='/saved-address' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                                            Saved Address
                                        </Link>
                                        <p className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer' onClick={logout}>
                                            Logout
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center'>
                            <h6 className='text-white'>Welcome</h6>
                            <p className='text-white'>To access account and manage orders.</p>
                            <div className='flex justify-around border-t border-b py-2'>
                                <Link to="/login" className="text-white p-2 btn rounded-0 btn-outline-primary">LOGIN</Link>
                                <Link to="/register" className="text-white p-2 btn rounded-0 btn-outline-primary">REGISTER</Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <CategoryPage />
        </>
    );
};

export default Header2;
