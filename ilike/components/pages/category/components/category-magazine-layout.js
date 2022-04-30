import React from 'preact/compat'
import GlBanner from './gl-banner';

import StickyPosts from './magazine-layout/sticky-posts';

export default function CategoryMagazineLayout({loading = true, loadingBanner = true, bannersLists, stickyPostsList = null}) {
    const {bannerMiddle} = bannersLists || {};
    return (
        <>
            <StickyPosts loading = {loading} 
                        data = {stickyPostsList} />
            <GlBanner loading = {loadingBanner}
                      data = {bannerMiddle} />
            <StickyPosts loading = {loading} 
                        data = {stickyPostsList}
                        showHeader = {false}
                        startIndx = {9} />
        </>
    )
}
