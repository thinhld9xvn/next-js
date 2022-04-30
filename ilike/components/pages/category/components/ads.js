import PdLoadingSquare from '@components/loading/pd-loading-square';
import React from 'preact/compat'
import GlBanner from './gl-banner';

export default function Ads({ loadingBanner = true, data }) {
    const {bannerSidebarOne, bannerSidebarTwo} = data || {};
    return (
        <>
            {loadingBanner || bannerSidebarOne || bannerSidebarTwo ? (
                <div className="qc">
                    <div className="qc-embed">
                        {loadingBanner ? (
                                <PdLoadingSquare />
                            ) : (
                                <>
                                    {bannerSidebarOne ? (
                                        <GlBanner loading = {loadingBanner}
                                                    data = {bannerSidebarOne} />
                                    ) : null}
                                </>
                            )}
                    </div>
                    <div className="qc-embed mtop20">
                        {loadingBanner ? (
                            <PdLoadingSquare />
                        ) : (
                            <>
                                {bannerSidebarTwo ? (
                                    <GlBanner loading = {loadingBanner}
                                                data = {bannerSidebarTwo} />
                                ) : null}
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </>
    )
}
