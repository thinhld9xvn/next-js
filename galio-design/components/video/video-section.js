import React, {useEffect, useState} from 'preact/compat'
import { injectIntl } from 'react-intl';
import NavPanels from './video-section/nav-panels'
import NavTabs from './video-section/nav-tabs'
import 'react-modal-video/css/modal-video.min.css';
import dynamic from 'next/dynamic';
import Heading from './video-section/heading';
import { useRouter } from 'next/router';
import { addCatFilterAllItem } from '@js_dir/utils/categoriesUtils';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
var iso = null;
var Isotope = null;
function VideoSection({ data, intl }) {
    const router = useRouter();
    const {messages} = intl;    
    const {getTaxonomiesList, getVideoList} = data;
    const [taxResultsList, setTaxResultsList] = useState([...getTaxonomiesList]);
    const [resultsList, setResultsList] = useState([...getVideoList]);
    const [tabActiveId, setTabActiveId] = useState(0);        
    const [showYoutubeVd, setShowYoutubeVd] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const closeYoutubeVdEvent = (e) => {
        setShowYoutubeVd(false);
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
        if ( iso ) {
            document.querySelectorAll('.video__group-item')
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
            setResultsList([...getVideoList]); 
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
        <>
            <section className="page__video">
                <div className="container">
                    <Heading />
                    <NavTabs data = {taxResultsList}
                            props = {{ tabActiveId, setTabActiveId}} />
                    <NavPanels data = {resultsList}
                                props = {{setShowYoutubeVd, setVideoId}} />
                </div>
            </section>

            <ModalVideo channel='youtube' 
                        autoplay                        
                        isOpen={showYoutubeVd} 
                        videoId={videoId}
                        onClose={closeYoutubeVdEvent} />

        </>

    )
}

export default injectIntl(VideoSection);
