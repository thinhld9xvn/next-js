import React, {useEffect, useState} from 'preact/compat'
import { injectIntl } from 'react-intl';
import NavPanels from './duan-section/nav-panels'
import NavTabs from './duan-section/nav-tabs'
import { removeLinesAnimation } from '@js_dir/utils/animations/setupAnimationsUtils';
import { useRouter } from 'next/router';
import { addCatFilterAllItem } from '@js_dir/utils/categoriesUtils';
var iso = null;
var Isotope = null;
function DuAnSection({ data, intl }) {
    const router = useRouter();
    const {messages} = intl;    
    const {getTaxonomiesList, getProjectsList} = data;    
    const [resultsList, setResultsList] = useState([...getProjectsList]);
    const [taxResultsList, setTaxResultsList] = useState([...getTaxonomiesList]);
    const [tabActiveId, setTabActiveId] = useState(-1);      
    useEffect(async () => {
        addCatFilterAllItem(getTaxonomiesList, messages.all);
        setTaxResultsList([...getTaxonomiesList]);
        Isotope = (await import('isotope-layout/dist/isotope.pkgd')).default;  
        iso = new Isotope( '.grid', {
            itemSelector: '.grid-item'
        });
    }, []);
    useEffect(() => {
        removeLinesAnimation();
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
    useEffect(() => {
        const slug = router.query.slug;
        if (slug) {
            const cat = taxResultsList.find(e => e.url.split('/').pop().toLowerCase() === slug.toString().toLowerCase());
            if ( cat ) {
                setTimeout(function() {
                    setTabActiveId(cat.id);
                    console.log(cat);                    
                }, 500);
            }
        }
    }, [resultsList]);
    return (
        <section className="page__project">
            <div className="container">
                <h1 className="bg-title" data-split-letters-big>
                    projects
                </h1>
                <NavTabs data = {taxResultsList}
                         props = {{ tabActiveId, setTabActiveId}} />
                <NavPanels data = {resultsList}
                            props = {{setResultsList}} />
            </div>
        </section>

    )
}

export default injectIntl(DuAnSection);
