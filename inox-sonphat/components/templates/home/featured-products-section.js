import { cloneArray, isDiff } from '@js_dir/utils/arrayUtils';
import { addCatFilterAllItem } from '@js_dir/utils/categoriesUtils';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'preact/compat'
import NavPanels from './featured-products/nav-panels';
import NavTabs from './featured-products/nav-tabs';
import { injectIntl } from 'react-intl';
import { getPageUrlByLocale } from '@js_dir/utils/urlUtils';
function FeaturedProductsSection({ data, intl }) {
    const {messages} = intl;
    const router = useRouter();    
    const [resultsList, setResultsList] = useState([[...data]]);
    const [tabActiveId, setTabActiveId] = useState(data[0].id);
    useEffect(() => {
        if ( isDiff(data, resultsList) ) {
            addCatFilterAllItem(data, messages.view_all, getPageUrlByLocale('products', router.locale));
            setResultsList([...data]);
        }
    }, [,data, router.locale, router.query.slug]);
    useEffect(() => {
        setTimeout(function() {
            if ( resultsList.length ) {
                setTabActiveId(resultsList[0].id);
            }
        }, 500);
    }, [resultsList, router.locale, router.query.slug]);
    //console.log(data);
    return (
        <section className="b2 hpro section-pad-xs">
            <div className="container">
                <h2 className="s24 t2 text-center text-uppercase bold tit sabout-tit">{messages.featured_products}</h2>
                <NavTabs data = {resultsList}
                        props = {{tabActiveId, setTabActiveId}} />
                <NavPanels data = {resultsList}
                            props = {{tabActiveId}} />
            </div>
        </section>
    )
}
export default injectIntl(FeaturedProductsSection);
