import React from 'preact/compat'
export default function Support({ data }) {
    return (
        <div className="col-menu footer-col col-menu-support">
            <div className="wrapper">
                <h2 className="title">Hỗ trợ</h2>
                <div dangerouslySetInnerHTML={{
                    __html : data
                }}></div>
            </div>
        </div>
    )
}
