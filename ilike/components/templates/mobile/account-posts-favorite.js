import { forYouPostLists } from '@constants/constants';
import React from 'preact/compat'
import FeaturedMobileFavoriteArticle from '../featured-mobile-favorite-article';

export default function AccountPostsFavorite() {
    const arrForYouItems = forYouPostLists.map((item, i) => <FeaturedMobileFavoriteArticle single = {item}
                                                                                    key = {item.id} />);
    return (
        <div className="wrapper">
            <main id="main" className="main-mobile">
                <div className="container">
                    <div className="account-section account-edit-email-section">
                        <h3 className="account-sm-heading nopad">Bài viết đã lưu</h3>
        
                        <div className="account-saved-posts-list mtop30">
                            {arrForYouItems}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
