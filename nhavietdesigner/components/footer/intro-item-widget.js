import React from 'preact/compat'

export default function IntroItemWidget({ data }) {
    return (
        <div className="_item">
            <div className="vk-footer__list--style-1"
                    dangerouslySetInnerHTML={{
                        __html : data
                    }}>
                
            </div>
        </div>
    )
}
