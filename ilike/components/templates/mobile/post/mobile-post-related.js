import React from 'preact/compat'
import FeaturedMobileArticle from '@templates/featured-mobile-article'

export default function MobilePostRelated({ heading = '', className = '', data, isTinyRelated = false }) {
    let postsList = [...data];
    if ( isTinyRelated ) {
        postsList = [...postsList.filter((e, i) => i < 2)];
    }
    return (
        <div className={"post-related mb-post-related-box ".concat(className)}>
            {heading ? (
                <h2 className="mb-section-heading flex flex-align-center">
                    <strong className="upper">{heading}</strong>
                </h2>
            ) : null}
            <div className="mb-judge-related-lists">
                <FeaturedMobileArticle data = {postsList}
                                        index = {0}
                                        showthumbnail = {true}
                                        thumbnailpos = "right"
                                        showauthormeta = {true} />
                <FeaturedMobileArticle data = {postsList}
                                        index = {1}
                                        showthumbnail = {true}
                                        thumbnailpos = "right"
                                        showauthormeta = {true} />
                <FeaturedMobileArticle data = {postsList}
                                        index = {2}
                                        showthumbnail = {true}
                                        thumbnailpos = "right"
                                        showauthormeta = {true} />
            </div>
        </div>
    )
}
