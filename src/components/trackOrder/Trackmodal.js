import React from 'react'

function Trackmodal({ setToggle }) {
    return (
        <>


            <div className="font-sans bg-gray-100 flex items-center justify-center h-screen">
                <div x-data="{ showPrivacyPolicy: true }">

            
                    <div className="fixed z-10 inset-0  flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4">

                            <div className="px-6 py-2 flex justify-between  align-items-center">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Product Details </h3>
                                <button onClick={() => setToggle(false)}><i className="bi bi-x-circle " style={{fontSize: "30px"}}></i></button>
                            </div>
                            <div className='flex p-4 gap-3'>
                                <div className='col-md-5'>
                                    <div className='productImg'>
                                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/c/k/3xl-cherryembrodied-anushansa-original-imagx4fhgmjqjvac.jpeg?q=70' alt='product Image' />
                                    </div>
                                </div>
                                <div className='col-md-7'>
                                    <div className='productInfo'>
                                        <form>
                                            <div className='col-md-12 px-2'>
                                                <label htmlFor="title" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Title</label>
                                                <input id="title" className="form-control text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Product Title" />
                                            </div>
                                            <div className='flex gap-2 p-3'>
                                                <div className='col-md-6'>
                                                    <label htmlFor="price" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Price</label>
                                                    <input id="price" className="form-control mb-2  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Price" />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label htmlFor="qty" className=" text-gray-800 text-sm font-bold leading-tight tracking-normal">Quantity</label>
                                                    <input id="qty" className=" form-control mb-2  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Quantity" />
                                                </div>
                                            </div>
                                            <div className='flex gap-2 p-3'>
                                                <div className='col-md-6'>
                                                    <label htmlFor="size" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Size</label>
                                                    <input id="size" className="form-control mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Size" />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label htmlFor="color" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Color</label>
                                                    <input id="color" className="form-control mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Color" />
                                                </div>
                                            </div>
                                            <div className='col-md-12 p-2'>
                                                <label htmlFor="title" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Description</label>
                                                <textarea id="title" rows={5} className="form-control mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Product Description" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
                                <button type="button" className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"> Accept </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trackmodal