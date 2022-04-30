import React from 'preact/compat'
export default function Banner({ data }) {
    const {thumbnail, title, name} = data;
    return (
        <section className="banner-main">
            <div className="owl-carousel owl-theme slider-main-banner">
                <div className="item">
                    <img src={thumbnail} alt="banner" />
                    <div className="title-banner">
                        <h4 dangerouslySetInnerHTML={{
                            __html : title
                        }}></h4>
                        <h2 dangerouslySetInnerHTML={{
                            __html : name
                        }}></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
