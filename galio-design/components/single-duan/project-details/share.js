import React from 'preact/compat'

export default function Share() {
    return (
        <div className="info-item">
            <div className="share__group">
                <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">Share:</p>
                <a href="#" className="share-link wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" className="share-link wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.2s">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" className="share-link wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.4s">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
                <a href="#" className="share-link wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
