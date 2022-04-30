import { isDiff } from '@js_dir/utils/arrayUtils';
import React, {useEffect, useState} from 'preact/compat'
import TemplateBreadcrumbItem from './breadcrumbs/template-breadcrumb-item';
export default function Breadcrumbs({ data }) { 
    const [breadcrumbs, setBreadcrumbs] = useState(null);
    const [breadcrumbsData, setBreadcrumbsData] = useState(data);    
    useEffect(() => {
        if ( isDiff(breadcrumbsData, data)) {
            setBreadcrumbsData(data);
            setBreadcrumbs(data && data.map((e, i) => {
                const is_last_item = i === data.length - 1;
                return <TemplateBreadcrumbItem key = {e.id}
                                            item = {e}
                                            is_last = {is_last_item} />
            }));
        }
    });    
    return (
        <div id="breacrumbs">
            <div className="container">
                {breadcrumbs}
            </div>
        </div>
    )
}
