import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon
    
} from "react-share";
import { useProductContext } from '../../../Context/index.context';

function Share() {
    const { share, setShare } = useProductContext()
    const shareUrl = "https://mayavifashion.com/";
    return (
        <div className="share-container">
            <div className="share_pop fixed sm:w-96 w-80 top-[40%] sm:left-[35%] left-[7%] z-50">
              
                <div className="bg-white rounded shadow-md py-24  p-3 w-full ">
                    <div className='flex justify-between items-center py-3'>
                        <h5>Share Product</h5>
                        <div className='close' onClick={() => setShare(false)}>
                            <i className="bi bi-x-lg text-black"></i>
                        </div>
                    </div>
                    <hr />
                    <p className='mt-3'>Share this link via</p>
                    <FacebookShareButton url={shareUrl} className='m-2'>
                        <FacebookIcon size={40} className='rounded-pill' />
                    </FacebookShareButton>
                    <WhatsappShareButton url={shareUrl} className='m-2'>
                        <WhatsappIcon size={40} className='rounded-pill' />
                    </WhatsappShareButton>
                    <TwitterShareButton url={shareUrl} className='m-2'>
                        <TwitterIcon size={40} className='rounded-pill' />
                    </TwitterShareButton>
                    <TelegramShareButton url={shareUrl} className='m-2'>
                        <TelegramIcon size={40} className='rounded-pill' />
                    </TelegramShareButton>
             
                </div>
            </div>
        </div>
    );
}

export default Share;
