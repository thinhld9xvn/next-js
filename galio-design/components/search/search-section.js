import React, {useEffect, useState} from 'preact/compat'
import { injectIntl } from 'react-intl';
import NavPanels from './search-section/nav-panels'
import NavTabs from './search-section/nav-tabs'
import { addCatFilterAllItem, getCatListByPosts, inCategory } from '@js_dir/utils/categoriesUtils';
import Heading from './search-section/heading';
import { useRouter } from 'next/router';
var iso = null;
var Isotope = null;
function SearchSection({ data, intl }) {
    const router = useRouter();
    const {messages} = intl;    
    const {getProjectsList} = data;
    const [taxResultsList, setTaxResultsList] = useState([...getCatListByPosts(getProjectsList)]);
    const [resultsList, setResultsList] = useState([...getProjectsList]);
    const [tabActiveId, setTabActiveId] = useState(-1);  
    useEffect(async () => {
        const getTaxonomiesList = getCatListByPosts(getProjectsList);
        addCatFilterAllItem(getTaxonomiesList, messages.all);
        setTaxResultsList([...getTaxonomiesList]);
        Isotope = (await import('isotope-layout/dist/isotope.pkgd')).default;  
        iso = new Isotope( '.grid', {
            itemSelector: '.grid-item'
        });
    }, []);
    useEffect(() => {
        if ( iso ) {
            document.querySelectorAll('.project__group-item')
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
            const getTaxonomiesList = getCatListByPosts(getProjectsList);
            addCatFilterAllItem(getTaxonomiesList, messages.all);
            setTaxResultsList([...getTaxonomiesList]);
            setResultsList([...getProjectsList]); 
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
        <section className="page__project">
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

export default injectIntl(SearchSection);
