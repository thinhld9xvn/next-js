import React, {useEffect, useState} from 'preact/compat'
import { injectIntl } from 'react-intl';
import NavPanels from './section-media/nav-panels'
import NavTabs from './section-media/nav-tabs'
import Heading from './section-media/heading';
import { useRouter } from 'next/router';
import { addCatFilterAllItem } from '@js_dir/utils/categoriesUtils';
var iso = null;
var Isotope = null;
function SectionMedia({ data, intl }) {
    const router = useRouter();
    const {messages} = intl;    
    const {getTaxonomiesList, getMediaList} = data;
    const [taxResultsList, setTaxResultsList] = useState([...getTaxonomiesList]);
    const [resultsList, setResultsList] = useState([...getMediaList]);
    const [tabActiveId, setTabActiveId] = useState(0); 
    useEffect(async () => {
        addCatFilterAllItem(getTaxonomiesList, messages.all);
        setTaxResultsList([...getTaxonomiesList]);
        Isotope = (await import('isotope-layout/dist/isotope.pkgd')).default;  
        iso = new Isotope( '.grid', {
            itemSelector: '.grid-item'
        });
    }, []);
    useEffect(() => {
        if ( iso ) {
            document.querySelectorAll('.media__group--item')
                    .forEach(e => {
                        e.classList.remove('wow');
                        e.classList.remove('fadeInUp');
                    });
            iso.arrange({ filter : tabActiveId === 0 ? '*' : `.isotope-${tabActiveId}` });  
        }
    }, [tabActiveId]);
    useEffect(async () => {         
        if ( iso ) {
            document.querySelector('.grid')
                    .removeAttribute('style');
            addCatFilterAllItem(getTaxonomiesList, messages.all);
            setTaxResultsList([...getTaxonomiesList]);
            setResultsList([...getMediaList]); 
            setTimeout(function() {
                iso.destroy();
                iso = new Isotope( '.grid', {
                    itemSelector: '.grid-item'
                });
            }, 200);
        }
        setTabActiveId(0);  
    }, [router.locale]);
    return (
        <section className="page__media">
            <div className="container">
                <Heading />
                <NavTabs data = {taxResultsList}
                         props = {{ tabActiveId, setTabActiveId}} />
                <NavPanels data = {resultsList}
                            props = {{setResultsList}} />
            </div>
        </section>
    )
}

export default injectIntl(SectionMedia);
