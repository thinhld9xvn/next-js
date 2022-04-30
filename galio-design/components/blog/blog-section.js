import React, {useEffect, useState} from 'preact/compat'
import { injectIntl } from 'react-intl';
import NavPanels from './blog-section/nav-panels'
import NavTabs from './blog-section/nav-tabs'
import { removeLinesAnimation } from '@js_dir/utils/animations/setupAnimationsUtils';
import { useRouter } from 'next/router';
var iso = null;
var Isotope = null;
function BlogSection({ data, intl }) {
    const router = useRouter();
    const {messages} = intl;
    const {getTaxonomiesList, getArticlesList} = data;
    const [resultsList, setResultsList] = useState([...getArticlesList]);
    const [taxResultsList, setTaxResultsList] = useState([...getTaxonomiesList]);
    const [tabActiveId, setTabActiveId] = useState(0);    
    const setupAnimationTab = () => {
        if ( iso ) {
            document.querySelectorAll('.blog__group-item')
                    .forEach(e => {
                        e.classList.remove('wow');
                        e.classList.remove('fadeInUp');
                    });
            iso.arrange({ filter : tabActiveId === 0 ? '*' : `.isotope-${tabActiveId}` });  
        }
    }
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
        setupAnimationTab();   
    }, [tabActiveId]);
    useEffect(async () => {         
        if ( iso ) {
            document.querySelector('.grid')
                    .removeAttribute('style');
            addCatFilterAllItem(getTaxonomiesList, messages.all);
            setTaxResultsList([...getTaxonomiesList]);
            setResultsList([...getArticlesList]); 
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
        <section className="page__blog">
            <div className="container">
                <h1 className="blog__title" data-split-letters-big>
                    {messages.blog}
                </h1>
                <NavTabs data = {taxResultsList}
                         props = {{ tabActiveId, setTabActiveId}} />
                <NavPanels data = {resultsList} />
            </div>
        </section>
    )
}

export default injectIntl(BlogSection);
