import React from 'preact/compat'
export default function Socials({ data }) {
    return (
        <div className="col-menu footer-col">
            <div className="wrapper">
                <h2 className="title">Liên kết</h2>
                <div dangerouslySetInnerHTML={{
                    __html : data
                }}></div>
            </div>
        </div>
    )
}
