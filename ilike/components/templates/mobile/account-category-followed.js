import React from 'preact/compat'

export default function AccountCategoryFollowed() {
    return (
        <div className="wrapper">
            <main id="main" className="main-mobile">
                <div className="container">
                    <div className="account-section account-edit-email-section">
                        <div className="flex flex-align-center flex-justify-space-between">
                            <h3 className="account-sm-heading nopad">Danh mục có thể bạn quan tâm</h3>
                            <ul className="mb-def-lists mb-cat-menu mb-followed-cat-lists flex flex-justify-space-between mtop30">
                                <li className="active">
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">Thể thao</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="padleft10">Điện ảnh</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">Showbiz</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">Âm nhạc</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">Đời sống</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">Điểm đến trẻ</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">Công nghệ</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="tag tag-cat" href="#">
                                        <span className="flex flex-align-items" style="">
                                            <span className="">iMagazine</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="flex w100p"><a className="mb-button mb-5rounded mb-button-defpad mb-black-button mb-login-button w100p" href="#">Theo dõi</a></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
