import React from 'preact/compat'
const showLightGallery = function(e, index) {
    e.preventDefault(); 
    const items = Array.from(document.querySelectorAll('.item-gallery'));
    items[index].click();
}
export default function TemplateGalleryItem({ data, index }) {
    const {full} = data;
    return (
        <div className="element">
            <div className="thumbnail">
                <a href="#"
                    onClick={e => showLightGallery(e, index)}>
                    <img src={full}
                        alt="gallery" 
                        className="detai__project-img wow fadeInUp" 
                        data-wow-duration="2s" 
                        data-wow-delay="0.4s" />
                </a>
            </div>
        </div>
    )
}
