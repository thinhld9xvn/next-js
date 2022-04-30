import React from 'preact/compat'
import Link from 'next/link'

export default function CareerSection({ data }) {
    const {heading, contents, button_text, button_url, background} = data;
    return (
        <section className="home__career">
            <h1 className="bg-title wow fadeInUp" data-types-card>career</h1>
            <div className="container">
                <div className="career__content wow fadeInUp" data-types-card data-wow-duration="2s" data-wow-delay="1s">
                    <h2 className="title_global" data-split-letters="4000">{heading}</h2>
                    <div dangerouslySetInnerHTML={{
                        __html : contents
                    }}>

                    </div>
                    <Link href={button_url}>
                        <button className="button" data-button="1500">
                            <span className="button__text">{button_text}</span>
                            <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect className="button__shape" height="100%" width="100%"></rect>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="career-avatar wow fadeInUp" 
                        data-types-card 
                        data-wow-duration="2s" 
                        data-wow-delay="1.5s">
                    <div className="career-img">
                        <img src={background} alt="index-1.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}
