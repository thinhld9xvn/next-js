import React from 'preact/compat'
import TemplateProductItem from '@templates/template-product-item';
export default function NavPanelItem({data, props}) {
    const {id, data : productsList} = data;
    const {tabActiveId} = props;
    const panelProductsList = productsList ? productsList.map(product => <TemplateProductItem key = {product.id}
                                                                                              data = {product} />) : null;
    return (
        <>
            {panelProductsList ? (
                <div className={"tab-pane fade ".concat(tabActiveId === id ? 'active show' : '')} key={`tabpanel__${id}`}>
                    <div className="row hpro-row">
                        {panelProductsList}
                    </div>
                </div>
            ) : null}
        </>
    )
}
