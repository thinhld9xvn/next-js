import React from 'preact/compat'

export default function TemplateArticleItem({ data }) {
    const {title, contents, location} = data;
    return (
        <div className="info__group-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
            <h3 className="info__title">
                {title}
            </h3>
            <div className="info-add">
                {location} <br />
                <br />
            </div>
            <div dangerouslySetInnerHTML={{
                __html : contents
            }}></div>
            <br />
            <a href="#">Ứng tuyển</a>
        </div>
    )
}
