import { getArticleCategoryStr, getArticleDateCreatedStr } from '@js_dir/utils/articleUtils';
import React from 'preact/compat'
export default function TemplatePageBanner({ data, layout = process.env.PAGE_POST_TYPE }) {
    const {bannerImage, title} = data;
    let dateCreatedC = null;
    if ( layout === process.env.POSTS_POST_TYPE  ) {
        const dateCreatedStr = getArticleDateCreatedStr(data, true);
        const categoryStr = getArticleCategoryStr(data);
        dateCreatedC = <div className="create-cate">
                                <p>{dateCreatedStr}</p>
                                <p>{categoryStr}</p>
                            </div>
    }
    return (
        <section className={"banner-main ".concat(layout === process.env.POSTS_POST_TYPE ? 'new-banner' : '')}>
            <div className="owl-carousel owl-theme slider-main-banner">
                <div className="item">
                    <img src={bannerImage} alt="banner" />
                    <div className="title-banner">
                        <h2>{title}</h2>
                        {dateCreatedC}
                    </div>
                </div>
            </div>
        </section>
    )
}
