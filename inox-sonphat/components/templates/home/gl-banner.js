import React from 'preact/compat'
export default function GlBanner({ data }) {
    const {heading1, heading2, hotline, hotline_url, featured_image, background} = data;
    return (
        <section className="bl-banner b2 default-section-pb-xs">
            <div className="bn-layer">
                <img src={background} alt="banner" />
            </div>
            {/*<div className="bn-layer"
                    style={{ backgroundImage: `url(${background})` }}>
                <div className="container">
                    <div className="grid-bl-banner grid grid-2" style="">
                        <div className="element">
                            <div className="element-wrapper bn-elem-col1">
                                <h1 className="title-bn">{heading1}</h1>
                                <h2 className="title-bn2">{heading2}</h2>
                                <a className="phone-bg" href={hotline_url}>
                                    {hotline}
                                </a>
                            </div>
                        </div>
                        <div className="element">
                            <div className="element-wrapper">
                                <div className="image-bg">
                                    <img src={featured_image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </section>
    )
}
