import React from 'preact/compat'
import TemplateSocialItem from '@templates/template-social-item';
export default function Social({ data }) {
    const arrSocialItems = data ? data.map(item => {
        const {id} = item;
        if ( ['facebook', 'twitter', 'linkedin'].indexOf(id) === -1 ) return;
        return <TemplateSocialItem data = {item}
                                   key = {item.id} />
    }) : null;
    return (
        <ul className="list-unstyled d-md-inline-block d-none social header-top-social">
            {arrSocialItems}
        </ul>
    )
}
