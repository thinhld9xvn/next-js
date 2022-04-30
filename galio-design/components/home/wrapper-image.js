import React, {useEffect, useState} from 'preact/compat'
import TemplateBgImage from './wrapper-image/template-bg-image';
import TemplateWrapperImage from './wrapper-image/template-wrapper-image';
function onMouseOut(e, setBgImageShowIdx) {
    setBgImageShowIdx(null);        
}
export default function WrapperImage({ data }) {
    const [wrapperImages, setWrapperImages] = useState(null);
    const [bgImages, setBgImages] = useState(null);
    const [bgImageShowIdx, setBgImageShowIdx] = useState(null);
    const init = function() {
        const arrWrapperList = [];
        const arrBgList = [];
        data.map((item, i) => {
            const settings = {
                wowDuration : '2s',
                wowDelay : (i * 0.8) + 's',
            };
            arrWrapperList.push(<TemplateWrapperImage data = {item}
                                                      index = {i}
                                                      settings = {settings}
                                                      props = {{
                                                        bgImageShowIdx,
                                                        setBgImageShowIdx
                                                      }} />);
            arrBgList.push(<TemplateBgImage data = {item}
                                            index = {i}
                                            props = {{
                                                bgImageShowIdx,
                                                setBgImageShowIdx
                                            }} />);
        });
        setWrapperImages(arrWrapperList);
        setBgImages(arrBgList);
    }
    useEffect(() => {
        init();       
    }, []);
    useEffect(() => {
        init();       
    }, [bgImageShowIdx]);
    return (
        <section className="wrapper-img"
                onMouseOut={e => onMouseOut(e, setBgImageShowIdx)}>
            <div className="types__inner">
                <div className="type__bg">
                    {bgImages}
                </div>
                <div className="type__list">
                    {wrapperImages}
                </div>
            </div>
        </section>
    )
}
