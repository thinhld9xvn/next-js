import React from 'preact/compat'
import Link from 'next/link'
export default function AboutSection({data, locale}) {
    const {heading, contents, button_text, button_url, background_url} = data;
    return (
        <section className="sabout section-pad-xs">
            <div className="container">
                <h1 className="s24 t2 text-center text-uppercase bold tit pb-4 sabout-tit">{heading}</h1>
                <div className="justify-content-center">
                    <div className="pt-lg-5 pt-md-4 pt-2 col-lg-10">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-6 d-flex pad0">
                                <div className="sabout-l">
                                    <img height="300px" 
                                        src={background_url}
                                        className="lazy" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-6 col-pl5p col-pl0-xs mtop20-xs">
                                <div className="sabout-wrap paragraphs text-jusitfy-xs">
                                    <div dangerouslySetInnerHTML={{
                                        __html : contents
                                    }}>
                                    </div>
                                    <div className="text-lg-left text-center mtop20">
                                        <Link href={`/${locale}` + button_url}><a className="btn btn-more">{button_text}</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
