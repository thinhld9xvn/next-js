import React from 'preact/compat'
import Link from 'next/link'
import TemplateServiceItem from '@templates/template-service-item';
export default function ProductsWidget({data}) {
    const {heading, button_text, button_url, data : pdLists} = data;
    const arrPdLists = pdLists.map(item => <TemplateServiceItem key = {item.id} data = {item} /> )
    return (
        <section className="product-top">
            {heading ? (
                <div className="block-title-primary text-center">
                    {heading ? (
                        <h2 dangerouslySetInnerHTML={{
                            __html : heading
                        }}></h2>
                    ) : null}
                </div>
            ) : null}
            <div className="service-media">
                <div className="container">
                    {arrPdLists ? (
                        <div className="service-media-inner">
                            {arrPdLists}
                        </div>
                    ) : null}
                    {arrPdLists && button_url && button_text ? (
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
