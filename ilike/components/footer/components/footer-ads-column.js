import React from 'preact/compat'

export default function FooterAdsColumn({ data }) {

    const {phone, email} = data;
    
    return (
        <div className="group__item">
            <h2 className="title__footer">liên hệ quảng cáo</h2>
            <p className="info">
                Ông : Phạm Xuân Hùng <br />
                Hotline : {phone} <br />
                Email : {email} <br />
            </p>
        </div>
    )
}
