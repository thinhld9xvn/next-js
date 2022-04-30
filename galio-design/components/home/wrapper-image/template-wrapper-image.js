import React, {useEffect} from 'preact/compat'
import Link from 'next/link'
import { useRouter } from 'next/router';
function onMouseOver(e, index, setBgImageShowIdx) {
    setBgImageShowIdx(index);
}

export default function TemplateWrapperImage({ data, index, settings, props }) {
    const {locale} = useRouter();
    const {thumbnail, url, title} = data;
    const {wowDuration, wowDelay} = settings;
    const {bgImageShowIdx, setBgImageShowIdx} = props;
    return (
        <>
            <Link href={url}>
                <div className={`type__img pointer-cursor left wow fadeInUp `.concat(bgImageShowIdx !== null ? 'hide-img' : '')}
                    data-types-card 
                    data-wow-duration={wowDuration}
                    data-wow-delay={wowDelay}
                    onMouseOver={e => onMouseOver(e, index, setBgImageShowIdx)}>            
                    <img src={thumbnail} 
                            loading="lazy" 
                                alt="image" />
                    <h3 className="type__title">{title}</h3>           
                </div>
            </Link>
        </>
    )
}
