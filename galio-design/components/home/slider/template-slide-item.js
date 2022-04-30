import React, {useEffect} from 'preact/compat'

export default function TemplateSlideItem({ data, props }) {  
    const {item, index, length} = data;
    const {title, button_text, video, url, thumbnail} = item;
    const {setVideoUrl, setShowVdModal} = props;
    const setPlayFullScreenVideo = function(e) {
        e.preventDefault();
        setVideoUrl(video);
        setShowVdModal(true);
    }
    return (        
        <div className="slider-for-item">
            <div className="slider-for-header">
                <div className="title">
                    <h1 data-split-letters="2000">{title}</h1>
                    <a className="desc" 
                        href={!video && url ? url : '#'}
                        onClick={video ? setPlayFullScreenVideo : null}>
                        {button_text}
                        {video ? (
                            <button className="btn btn__play">
                                <i className="fa fa-play-circle" 
                                    aria-hidden="true"></i>
                            </button>
                        ) : null}
                    </a>
                </div>
                <div className="pagination">
                    <p>{index}/</p>
                    <h2>{length}</h2>
                </div>
            </div>
            <div className="slider-for-img">
                {video ? (
                    <>
                        <video autoPlay muted loop preload="auto">
                            <source src={video} type="video/mp4" />
                        </video>
                    </>
                ) : (
                    <>
                        {thumbnail ? <img src={thumbnail} alt="slide" /> : null}
                    </>
                )}                
            </div>
        </div>
    )
}
