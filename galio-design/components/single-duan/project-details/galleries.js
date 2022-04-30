import React, {useEffect, useState, useRef} from 'preact/compat'
import TemplateGalleryItem from './galleries/template-gallery-item';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import dynamic from 'next/dynamic';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { useRouter } from 'next/router';
const LightGallery = dynamic(() => import('lightgallery/react'), {ssr : false});
export default function Galleries({ data }) {
    const router = useRouter();
    const lightGalleryRef = useRef(null);
    const [LgComponent, setLgComponent] = useState(null);
    const [galleriesList, setGalleriesList] = useState(null);   
    const onInit = (detail) => {
        if (detail) {
            lightGalleryRef.current = detail.instance;            
        }
    }
    const init = () => {
        setLgComponent(null);
        setGalleriesList(null);
        let count = 0;
        const arrGalleryImagesList = [];
        const arrGalleriesList = data ? data.map((item, i) => {
            const {data} = item;
            const length = data.length;
            const classname = length > 1 ? `grid grid-columns-${length}` : '';
            const myGalleries = data ? data.map((gallery, j) => {
                arrGalleryImagesList.push(<a key={`${i}__${j}`}
                                             className="item-gallery" 
                                             href={gallery.full}>
                                                <img data-src={gallery.full} loading="lazy" />
                                            </a>);
                count++;
                return (
                    <TemplateGalleryItem key={`${i}__${j}`}
                                         data={gallery}
                                         index={count - 1} />
                );
            }) : [];
            return (
                <div key={i} 
                    className={`grid-project-galleries ${classname}`}>
                    {myGalleries}
                </div>
            );
        }) : [];
        setGalleriesList(arrGalleriesList);
        setLgComponent(<LightGallery
                            thumbnail={false}
                            toggleThumb={false}
                            animateThumb={false}
                            allowMediaOverlap={true}
                            zoomFromOrigin={false}
                            showThumbByDefault={false}
                            selector=".item-gallery"
                            addClass="lg-fixed-size"
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            onInit={onInit}
                        >
                            {arrGalleryImagesList}
                        </LightGallery>);
        setTimeout(function() {
            lightGalleryRef.current.refresh();
        }, 200);
    }
    useEffect(() => {
        init();
    }, []);
    useEffect(() => {
        init();
    }, [router.query.slug, router.locale]);
    return (
        <>
            {galleriesList}
            <div style={{display : 'none'}}>
                {LgComponent}
            </div>
        </>
    )
}
