import React from 'preact/compat'
import Link from 'next/link'
import TemplateServiceItem from '@templates/template-service-item';
export default function ServicesWidget({data}) {
    const {heading, heading_sm, button_text, button_url, data : svLists} = data;
    const arrSvLists = svLists.map(item => <TemplateServiceItem key = {item.id} data = {item} /> )
    return (
        <section className="intro-service">
            {heading || heading_sm ? (
                <div className="block-title-primary text-center">
                    {heading ? (
                        <h2 dangerouslySetInnerHTML={{
                            __html : heading
                        }}></h2>
                    ) : null}
                    {heading_sm ? (
                        <div dangerouslySetInnerHTML={{
                            __html : heading_sm
                        }}></div>
                    ) : null}
                </div>
            ) : null}
            <div className="service-media">
                <div className="container">
                    {arrSvLists ? (
                        <div className="service-media-inner">
                            {arrSvLists}
                        </div>
                    ) : null}
                    {arrSvLists && button_url && button_text ? (
                        <Link href={button_url}>
                            <a className="see-more">
                                {button_text}
                            </a>
                        </Link>
                    ) : null}
                </div>
            </div>
        </section>
    )
}
