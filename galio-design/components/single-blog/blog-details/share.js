import React from 'preact/compat'

export default function Share() {
    return (
        <div className="share__group">
            <p>Share:</p>
            <a href="#" className="share-link">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="share-link">
                <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" className="share-link">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>
            <a href="#" className="share-link">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
        </div>
    )
}
