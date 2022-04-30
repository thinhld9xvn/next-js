import React, {useState, useEffect} from 'preact/compat'

export default function TemplatePanelItem({ data, settings, props }) {
    const {wowDuration, wowDelay} = settings;
    const {setShowYoutubeVd, setVideoId} = props;
    const {video_yt_id, thumbnail, categories} = data;
    const showYoutubeVdEvent = (e) => {        
        e.preventDefault();
        setVideoId(video_yt_id);
        setShowYoutubeVd(true);
    }
    const isofilters = categories.map(cat => 'isotope-' + cat.id).join(' ');
    return (
        <div className={"video__group-item wow fadeInUp grid-item ".concat(isofilters)}
              data-wow-duration={wowDuration}
              data-wow-delay={wowDelay}>
            <a href="#"
                className="video__link"
                onClick={showYoutubeVdEvent}>
                <img src={thumbnail} alt="video" className="video-avatar" />
            </a>
        </div>
    )
}
