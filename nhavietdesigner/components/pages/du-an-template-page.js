import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import TemplateSection from './du-an-template-page/template-section';
var boolScroll = true;
var offsetScroll = 0;
function DuAnTemplatePage({ data }) {    
    const router = useRouter();
    const arrGalleriesSection = [];
    const {options} = data;
    const {title, description, banners_list, options : dataPageOptions} = options;
    const length = dataPageOptions.length;
    var count = 0;
    for ( let i = 0; i < length; i++ ) {
        if ( i !== count ) continue;
        const data = [];
        const k = i + 1;
        const j = k + 1;   
        data.push(dataPageOptions[i]);
        if ( k < length ) {
            data.push(dataPageOptions[k]);
        }
        if ( j < length ) {
            data.push(dataPageOptions[j]);
        }
        arrGalleriesSection.push(<TemplateSection data = {data} />);      
        count += 3;
    }
    useEffect(() => {
        const isMediaQueryValidate = window.innerWidth > 991 && window.innerHeight >= 650;
        if ( typeof(document) !== 'undefined' ) {
            var main = document.getElementById('scrollMainPanel');
            var scrollBarTrack = main.querySelector('.scrollBarTrack');   
            const scrollToSectionEvent = function(e) {      
                e.preventDefault();
                e.stopPropagation();
                const isScrollingDown = e.deltaY > 0;
                const sections = Array.from(main.querySelectorAll('.section'));
                const section_height = sections[0].clientHeight;
                const length = sections.length;
                if ( boolScroll ) {
                    boolScroll = false;
                    if ( isScrollingDown ) { // scroll down
                    if ( offsetScroll < length - 1 ) {
                        offsetScroll++;
                    }
                    }
                    else { // scroll up
                        if ( offsetScroll > 0 ) {
                            offsetScroll--;
                        }
                    }
                    const offsetScrollY = offsetScroll > 0 ? offsetScroll * section_height : 0;
                    scrollBarTrack.style.transform = `translate(0, -${offsetScrollY}px)`;
                    setTimeout(function() {
                        boolScroll = true;
                    }, 500);
                }   
                return false;
            }
            if ( isMediaQueryValidate ) {
                main.addEventListener('wheel', scrollToSectionEvent);
            } 
        }
    }, []);
    useEffect(() => {
        boolScroll = true;  
        offsetScroll = 0;
        const isMediaQueryValidate = window.innerWidth > 991 && window.innerHeight >= 650;
        if ( typeof(document) !== 'undefined' ) {
            if ( isMediaQueryValidate ) {
                document.body.style.overflow = 'hidden';
                document.getElementById('mainPsScrollBar')
                        .style.height = '100vh';
                setTimeout(function() {
                    const scrollBarTrack = document.querySelector('.scrollBarTrack');
                    scrollBarTrack && (scrollBarTrack.style.transform = 'translate(0, 0)');                   
                }, 200);                    
            }
            setTimeout(function() {
                document.querySelectorAll('.vk-shop-item__img img[data-src]')
                        .forEach(img => img.setAttribute('src', img.getAttribute('data-src') ));
            }, 200);
        }
        return () => {
            document.body.style.overflow = '';
            document.getElementById('mainPsScrollBar')
                    .style.height = '';
        }
    }, [router.query.slug]);
    return (
        <>
            <section id="main" 
                    className="vk-content">
                <div className="vk-shop__top">
                    <div className="vk-slider vk-shop__slider">
                        <div className="vk-img">
                            <img src={banners_list[0].url} alt="banner" loading="lazy" />
                        </div>
                    </div>
                    <div className="vk-shop__title-box">
                        <div className="_left">
                            <h1 className="vk-shop__title">{title}</h1>
                        </div>
                        <div className="_right">
                            <div className="vk-shop__title-text"
                                dangerouslySetInnerHTML={{
                                    __html : description
                                }}>
                            </div>
                        </div>
                    </div>                
                </div>
                <div id="scrollMainPanel" className="vk-shop__bot">
                    <div className="scrollBarTrack">
                        {arrGalleriesSection}
                    </div>
                </div>
            </section>
        </>
    )
}
function mapStateToProps(state) {   
    return {
        sRefetch: state.globalReducer.sRefetch
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updatedSRefetch : async (v) => await dispatch({
            type : "UPDATE_SREFETCH",
            payload : v
        })
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(DuAnTemplatePage);
