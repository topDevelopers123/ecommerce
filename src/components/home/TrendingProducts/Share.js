import React from 'react';
import { ShareSocial } from 'react-share-social';

function Share() {
    return (
        <div className="share-container">
            <div className="share_pop relative w-full bottom-0 z-50">
                <div className="bg-gray-500 py-24 p-5 w-full left-0">
                    <ShareSocial
                        url="https://url_to_share.com"
                        socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
                    />
                </div>
            </div>
        </div>
    );
}

export default Share;
