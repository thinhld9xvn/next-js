import { onClick_followCategory } from '@js_dir/utils/categoriesUtils';
import React from 'preact/compat'
import { useSession, signIn, signOut } from "next-auth/react"
export default function FollowButton({ data, props }) {
    const {data : session} = useSession();
    const {updateShowLoginModal} = props;
    return (
        <a href="#" 
            className="btn btn__monitor btn--yellow"
            onClick={e => onClick_followCategory(e, {...data, session}, updateShowLoginModal)}>
            Theo dõi
        </a>
    )
}
