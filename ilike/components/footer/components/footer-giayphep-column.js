import React from 'preact/compat'

export default function FooterGiayPhepColumn({ data }) {
    return (
        <div className="group__item">
            <h2 className="title__footer">giấy phép đăng ký</h2>
            <p className="info"
                dangerouslySetInnerHTML={{
                    __html : data
                }}>

            </p>
        </div>
    )
}
