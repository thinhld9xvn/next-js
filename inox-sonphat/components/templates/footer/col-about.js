import React from 'preact/compat'
import TemplateSocialItem from '../template-social-item';
export default function ColAbout({data}) {
    const {intro, intro_bg, socials} = data || {};
    const arrSocialItems = socials ? socials.map(item => <TemplateSocialItem data = {item}
                                                                             type = "link" 
                                                                             key = {item.id} />) : null;
    return (
        <div className="col-about-ft col-md-6">
            <div className="about-ft">
                {/*<div className="image">
                    <img src={intro_bg} alt="" />
                </div>
                <div className="contents mtop20"
                    dangerouslySetInnerHTML={{
                        __html : intro
                    }}>                    
                </div>*/}
                <div className="social-ft flex align-center">
                    {arrSocialItems}
                </div>
                <div className="qr grid grid-2 grid-og mtop20">
                    <div className="element">
                        <img src="/static/images/qr1.png" className="qr-image" alt="qr" />
                    </div>
                    <div className="element">
                        <img src="/static/images/qr2.png" className="qr-image" alt="qr" />
                    </div>
                </div>
            </div>
        </div>
    )
}
