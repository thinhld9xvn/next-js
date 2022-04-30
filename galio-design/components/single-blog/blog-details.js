import React from 'preact/compat'
import MainContents from './blog-details/main-contents';
import Related from './blog-details/related';
import Share from './blog-details/share';
import {injectIntl} from 'react-intl';

function BlogDetails({ data, intl }) {
    const {messages} = intl;
    const {title, contents, date_created, related} = data;
    const post_date = date_created[0];
    const {day, month, year} = post_date;
    return (
        <section className="detail__blog">
            <div className="container">
                <MainContents data = {{title, contents, day, month, year}} />
                <div className="container__content">
                    <Share />
                    <h2 className="blog__news-title">
                        {messages.related_posts}
                    </h2>
                </div>
                <Related data = {related} />
            </div>
        </section>
    )
}

export default injectIntl(BlogDetails)