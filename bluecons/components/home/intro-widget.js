import Link from 'next/link';
import React from 'preact/compat'
export default function IntroWidget({ data }) {
    const {heading, button_text, button_url, contents, background} = data;
    return (
        <section className="research">
            <div className="container">
                <div className="research-inner">
                    <div className="research-text">
                        {heading || contents ? (
                            <div className="block-title-primary">
                                {heading ? (
                                    <h2 dangerouslySetInnerHTML={{
                                        __html : heading
                                    }}></h2>
                                ) : null}
                                {contents ? (
                                    <div dangerouslySetInnerHTML={{
                                        __html : contents
                                    }}></div>
                                ) : null}
                            </div>
                        ) : null}
                        {button_url && button_text ? (
                            <Link href={button_url}>
                                <a className="see-more">
                                    {button_text}
                                </a>
                            </Link>
                        ) : null}
                    </div>
                    {background ? (
                        <Link href={button_url}>
                            <a className="research-media">
                                <img src={background} alt="" />
                            </a>
                        </Link>
                    ) : null}
                </div>
            </div>
        </section>
    )
}
