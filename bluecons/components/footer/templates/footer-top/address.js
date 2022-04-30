import React from 'preact/compat'
export default function Address({ data }) {
    return (
        <div className="col-address footer-col">
            <h2 className="title">Địa chỉ</h2>
            <div className="col-address-list"
                dangerouslySetInnerHTML={{
                    __html : data
                }}>
            </div>
        </div>
    )
}
