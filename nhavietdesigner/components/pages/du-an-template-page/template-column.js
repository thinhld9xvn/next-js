import React, {useState, useEffect} from 'preact/compat'
import dynamic from 'next/dynamic';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
const LightGallery = dynamic(() => import('lightgallery/react'), {ssr : false});
const showLightGallery = function(e, setShow) {
    e.preventDefault();
    setShow(true);
    document.body.style.overflow = 'hidden';
    setTimeout(function() {        
        const colGalItem = e.target.closest('.col-gallery-section');
        colGalItem.querySelector('.item-gallery')
                .click();
    }, 100);
}    
const onAfterClose = function(e) {
    document.body.style.overflow = '';
}
export default function TemplateColumn({ data }) {
    const [loading, setLoading] = useState(true);
    const [LgComponent, setLgComponent] = useState(null);
    const [show, setShow] = useState(false);
    const {title, icon, thumbnail, galleries } = data;
    const {url : galleryItemUrl} = galleries[0];    
    useEffect(() => {
        const arrGalleries = [];
        galleries.map((item) => {
            arrGalleries.push(
                <a className="item-gallery" href={item.url}>
                    <img alt={item.title} data-src={item.url} loading="lazy" />
                </a>
            );
        });
        const C = <div style={{display: 'none'}}>
                        <LightGallery
                            thumbnail={false}
                            toggleThumb={false}
                            animateThumb={false}
                            allowMediaOverlap={true}
                            zoomFromOrigin={false}
                            showThumbByDefault={false}
                            selector=".item-gallery"
                            addClass="lg-fixed-size"
                            speed={500}
                            onAfterClose={onAfterClose}
                            plugins={[lgThumbnail, lgZoom]}>
                            {arrGalleries}
                        </LightGallery>
                    </div>
        setLgComponent(C);
        setLoading(false);
    }, []);
    return (
        <div className="col-lg-4 col-gallery-section col-sm-12 col-xs-12">
            <div className="element">
                <div className="vk-shop-item vk-shop-item--style-1">
                    <div className="vk-shop-item__img">
                        <img data-src={thumbnail} 
                             src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                alt={title}
                                className="_img"
                                loading="lazy" />
                    </div>
                    <div className="vk-shop-item__brief">
                        <div className="vk-shop-item__box">
                            <h3 className="vk-shop-item__title"
                                dangerouslySetInnerHTML={{
                                    __html : title
                                }}>
                            </h3>
                            <div className="vk-shop-item__icon">
                                <img src={icon} alt="icon" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <a href={galleryItemUrl} 
                        className="vk-shop-item__link"
                        onClick={e => showLightGallery(e, setShow)}
                        style={{ pointerEvents : loading ? 'none' : ''}}></a>
                </div>
                {show ? (
                    <>
                        {LgComponent}
                    </>
                ) : null}
            </div>            
        </div>
    );
}
