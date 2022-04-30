import { onClick_followCategory } from '@js_dir/utils/categoriesUtils';
import React from 'preact/compat'
export default function FollowButton({ data, props }) {
    const {updateShowLoginModal} = props;
    return (
        <a href="#" 
            className="btn btn__monitor btn--red"
            onClick={e => onClick_followCategory(e, data, updateShowLoginModal)}>
            Theo dõi
        </a>
    )
}
