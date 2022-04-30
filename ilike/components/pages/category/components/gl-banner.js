import React from 'preact/compat'
import {default as HomeGlBanner} from '@home_gl_banner_widget/gl-banner'

export default function GlBanner({ loading = true, data}) {
    return (
        <HomeGlBanner loading = {loading}
                      data = {data} />
    )
}
