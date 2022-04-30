import React from 'preact/compat'

export default function FooterDongGopColumn({ data }) {
    return (
        <div className="group__item">
            <h2 className="title__footer">đóng góp nội dung</h2>
            <p className="info">
                Mọi bài viết và đóng góp về nội dung xin gửi về hòm thư :
            </p>
            <a href="to:info@gco.vn" title="email"> Email : info@gco.vn </a>
        </div>
    )
}
