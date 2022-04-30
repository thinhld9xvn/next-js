import React from 'preact/compat'

export default function FooterCopyright({ data }) {

    const {footer_info, copyright} = data;
    //const policiesHTML = `Chính sách - Điều khoản sử dụng - Hướng dẫn <br/> `;
    
    return (
        <div className="footer__bottom">
            <p style={{maxWidth : '500px'}} dangerouslySetInnerHTML={{
                    __html : footer_info
                }}>
            </p>
            <p dangerouslySetInnerHTML={{
                __html : copyright
            }}>
            </p>
        </div>
    )
}
