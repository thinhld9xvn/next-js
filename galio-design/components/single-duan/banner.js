import React from 'preact/compat'

export default function Banner({ data }) {
    const {heading, banner_description, thumbnail} = data;
    return (
        <section className="project__banner">
            <div className="project__banner-img">
                <img src={thumbnail} alt="slider" />
            </div>
            <div className="project__banner-title">
                <h1 data-split-letters-big>
                    {heading}
                </h1>
                <p data-split-letters="1000">
                    {banner_description}
                </p>
            </div>
            <button className="btn project__banner-prev">
                <img src="/static/images/icons/icon__prev.png" alt="icon__prev.png" />
            </button>
        </section>
    )
}
