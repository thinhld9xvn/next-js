import React from 'preact/compat'

import { default as NewsTextArticle } from '@templates/text-article'

export default function TextArticle({ loading = true, data = null, index = 0 }) {

    return (
        <NewsTextArticle loading = {loading}
                         data = {data}
                         index = {index} />
    )
}
