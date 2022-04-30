import React from 'preact/compat'

import Link from 'next/link'

import SocialNetwork from './showcase/social-network'

import {PAGE_URLS} from '@constants/constants'
import { addPathToUrl } from '@js_dir/utils/urlUtils'

export default function ShowcaseBottom({ data }) {
    return (
        <div className="showcase-bottom">
            <div className="row">
                <div className="col-xl-6 col-md-6 text-left">
                    <Link href={addPathToUrl('/' + PAGE_URLS.CONTACT, 'page')}>
                        <a className="allworks-link magnetize">
                            Say Hello
                        </a>
                    </Link>
                </div>
                <SocialNetwork data = {data} />
            </div>
        </div>
    )
}
