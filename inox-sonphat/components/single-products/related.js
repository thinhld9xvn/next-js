import TemplateProductItem from '@templates/template-product-item'
import React from 'preact/compat'
export default function Related({ data, messages }) {
    const productsList = data.map(product => <TemplateProductItem data = {product}  
                                                                    key = {product.id} />)
    return (
        <section className="b2 hpro section-pad-xs">
            <div className="container">
                <h1 className="pdetail-tit t2 text-center text-uppercase bold tit sabout-tit">
                    {messages['products_related_label']}
                </h1>
                <div className="mtop40">
                    <div className="row hpro-row">
                        {productsList}
                    </div>
                </div>
            </div>
        </section>
    )
}
