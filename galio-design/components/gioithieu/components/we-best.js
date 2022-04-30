import TemplateSlideItem from './we-best/template-list-item';
import React from 'preact/compat'

export default function WeBest({ data }) {
    const {strength_heading, strength_desc, strength_lists} = data;
    const strengthLists = strength_lists.map((item, i) => {
        const settings = {
            wowDuration : '2s',
            wowDelay : (i * 0.5) + 's'
        }
        return <TemplateSlideItem data = {item}
                                  settings = {settings}
                                  key = {i} />
    })
    return (
        <div className="we-best">
            <div className="container__content">
                <h2 className="we-best-header wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4">
                    {strength_heading}
                    <p className="desc"
                        dangerouslySetInnerHTML={{
                            __html : strength_desc
                        }}></p>
                </h2>
                <div className="we-best-list">
                    {strengthLists}
                </div>
            </div>
        </div>
    )
}
