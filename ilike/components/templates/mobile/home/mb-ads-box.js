import React from 'preact/compat'
export default function MbAdsBox({ data }) {
    if ( !data ) return <></>
    const {embed_code} = data;
    return (
        <>
            {embed_code ? (
                <div className="fullwith-section mb-section mb-ads-box">
                    <div className="container">
                        {/*<a href={dest_url || '#'}>
                            {image_path ? (
                                <img src={image_path} alt="banner" />
                            ) : null}
                        </a>*/}
                        <div className="embbed-banner" dangerouslySetInnerHTML={{
                            __html : embed_code
                        }}></div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
