import React, {useEffect, useState} from 'preact/compat'
import TemplateBreadcrumbsItem from './breadcrumbs/template-breadcrumbs-item';
export default function Breadcrumbs({data, className = ''}) {
    const [breadcrumbs, setBreadcrumbs] = useState(null);
    useEffect(() => {
        if ( data ) {
            setBreadcrumbs(data.map((e, i) => {
                const is_last_item = i === data.length - 1;
                return <TemplateBreadcrumbsItem key = {e.id}
                                            item = {e}
                                            is_last = {is_last_item} />
            }));
        }
    }, [data]);    
    return (
        <div className={"list-unstyled s14 bread ".concat(className)}>
           {breadcrumbs}
        </div>
    )
}
