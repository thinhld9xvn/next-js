import React from 'preact/compat'

import StickyPosts from './movie-layout/sticky-posts';
import OldPosts from './default-layout/old-posts';
import GlBanner from './gl-banner';

export default function CategoryMovieLayout({loading = true, loadingBanner = true, bannersLists, stickyPostsList = null, oldPostsList = null}) {
    const {bannerMiddle, bannerSidebarOne, bannerSidebarTwo} = bannersLists || {};
    return (
        <>
            <StickyPosts loading = {loading} 
                        data = {stickyPostsList} />
            <GlBanner loading = {loadingBanner}
                      data = {bannerMiddle} />
            <OldPosts loading = {loading}
                      loadingBanner = {loadingBanner}
                      data = {oldPostsList}
                      bannersList = {{bannerSidebarOne, bannerSidebarTwo}} />
        </>
    )
}
