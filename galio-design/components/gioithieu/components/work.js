import React from 'preact/compat'
import TemplateWorkItem from './work/template-work-item';

export default function Work({ data }) {
    const { duration_working_heading, duration_working_desc, duration_working_lists } = data;
    const workLists = duration_working_lists.map((item, i) => {
        const index = i.toLocaleString('en-US', {
                                            minimumIntegerDigits: 2,
                                            useGrouping: false
                                        });
        return <TemplateWorkItem data = {item}
                                 index = {index}
                                 key = {i} />
    });
    return (
        <div className="work">
            <div className="work-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <h2 dangerouslySetInnerHTML={{
                    __html : duration_working_heading
                }}>                    
                </h2>
                <div dangerouslySetInnerHTML={{
                    __html : duration_working_desc
                }}></div>
            </div>
            <div className="work-steps-group wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                {workLists}
            </div>
        </div>
    )
}
