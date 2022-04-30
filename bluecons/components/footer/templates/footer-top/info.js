import React from 'preact/compat'
export default function Info({ data }) {
    return (
        <div className="col-menu col-menu-info footer-col">
            <div className="wrapper">
                <h2 className="title">Thông tin</h2>
                <div dangerouslySetInnerHTML={{
                    __html : data
                }}></div>
            </div>
        </div>
    )
}
