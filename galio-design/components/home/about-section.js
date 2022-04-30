import React from 'preact/compat'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function AboutSection({ data }) {
    const router = useRouter();
    const {heading, contents, button_text, button_url} = data;
    return (
        <section className="home__about">
            <div className="container">
                <h1 className="bg-title">
                    <span data-split-letters-big>ABOUT</span>
                </h1>
                <div className="container__content">
                    <h2 className="title_global" data-split-letters="1200">{heading}</h2>
                    <div className="desc__global"
                        dangerouslySetInnerHTML={{
                            __html : contents
                        }}></div>
                    <Link href={button_url}>
                        <button className="button" data-button="1500">
                            <span className="button__text">
                                {button_text}
                            </span>
                            <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect className="button__shape" height="100%" width="100%"></rect>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
