import { formatDateStr } from '@js_dir/utils/dateUtils';
import React from 'preact/compat'

export default function CommentTime({ data }) {
    return (
        <time className="cm__time">
            {formatDateStr(data)}
        </time>
    )
}
