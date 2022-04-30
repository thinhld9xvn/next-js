import PdLoadingSquare from '@components/loading/pd-loading-square'
import BannerAds from '@components/templates/banner-ads'
import React from 'preact/compat'
export default function GlBanner({ loading = true, data }) {
    return (
        <>
            {loading ? (
                    <PdLoadingSquare />
                ) : (
                <>
                    {data ? (
                        <>
                            <section className="gl-banner">
                                <div className="container">
                                    <BannerAds data = {data} />
                                </div>
                            </section>
                        </>
                    ) : null}
                </>
            )}
        </>
    )
}
