import React from 'preact/compat'

export default function MbBanner() {
    return (
        <div className="mb-banner mb-sticky-banner flex flex-align-center flex-justify-center">
            <div className="container">
                <figure className="flex">
                    <h3>
                        Cùng thư giãn <br />
                        và tận hưởng <br />
                        phút giây của bạn...
                    </h3>
                    <span><img src="/static/images/quotes-icon.svg" alt="" /></span>
                </figure>
            </div>
        </div>
    )
}
