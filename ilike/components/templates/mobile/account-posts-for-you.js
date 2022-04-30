import { forYouPostLists } from '@constants/constants';
import React from 'preact/compat'
import FeaturedMobileArticle from '../featured-mobile-article';

export default function AccountPostsForYou() {
    const arrForYouItems = forYouPostLists.map((item, i) => <FeaturedMobileArticle single = {item}
                                                                                    key = {item.id}
                                                                                    showexcerpt = {false}
                                                                                    showthumbnail = {true}
                                                                                    thumbnailpost = 'right' />);
    return (
        <div className="wrapper">
            <main id="main" className="main-mobile">
                <div className="container">
                    <div className="account-section account-edit-email-section">
                        <div className="flex flex-align-center flex-justify-space-between">
                            <h3 className="account-sm-heading nopad">Dành cho bạn</h3>
                            <div className="flex">
                                <a className="mb-button mb-lg-social-button mb-5rounded mb-black-border mb-account-viewall __sm w100p" href="#">
                                    <strong>Danh mục <span className="fa fa-angle-down"></span></strong>
                                </a>
                            </div>
                        </div>
                        <hr className="mb-hr-line single __lg __mtop30" />
                        <div className="mb-foryou-kensjn">
                            {arrForYouItems}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
