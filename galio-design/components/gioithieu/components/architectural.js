import React from 'preact/compat'
import Link from 'next/link'

export default function Architectural({ data }) {
    const {price_heading, price_contents, price_button_text, price_button_url, price_thumbnail} = data;
    return (
        <div className="architectural">
            <div className="architectural-group">
                <div className="architectural-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <h2 className="architectural-title">
                        {price_heading}
                    </h2>
                    <div dangerouslySetInnerHTML={{
                        __html : price_contents
                    }}>

                    </div>
                    <Link href={price_button_url}>
                        <a className="button button__active button__hover">
                            <span className="button__text">{price_button_text}</span>
                            <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect className="button__shape" height="100%" width="100%"></rect>
                            </svg>
                        </a>
                    </Link>
                </div>
                <div className="architectural-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                    <img src={price_thumbnail} alt="about" />
                </div>
            </div>
        </div>
    )
}
