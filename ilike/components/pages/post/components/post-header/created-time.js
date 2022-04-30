import React from 'preact/compat'
import { formatDateStr } from '@js_dir/utils/dateUtils';

export default function CreatedTime({ data }) {
    return (
        <time className="detail__time">
            {formatDateStr(data)}
        </time>
    )
}
