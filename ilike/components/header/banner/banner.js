import BannerAds from '@components/templates/banner-ads';
import React from 'preact/compat'
export default function Banner({ data }) {
    if ( !data ) return <></>;
    return (
        <div className="container">
            <div className="banner__header">
                <BannerAds data = {data} />
            </div>
        </div>
    )
}
