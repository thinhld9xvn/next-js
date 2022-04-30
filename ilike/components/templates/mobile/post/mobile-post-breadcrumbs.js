import React from 'preact/compat'
import Link from 'next/link'
import { getFirstCategoryNameFromPost } from '@js_dir/utils/categoriesUtils'
import PdLoadingSquare from '@components/loading/pd-loading-square';
export default function MobilePostBreadcrumbs({loading = true, data}) {
    const name = !loading ? getFirstCategoryNameFromPost(data) : '';
    return (
        <>
            {loading ? (
                <>
                    <div className="mtop10">
                        <PdLoadingSquare size = "small" />
                    </div>
                </>
            ) : (
                <>
                    <div id="breadcrumbs" className="mb-breadcrumbs mb-breadcrumbs-pb">
                        <Link href="/">Trang chủ</Link>
                        <span className="fa fa-angle-right"></span>
                        <span className="current">{name}</span>
                    </div>
                </>
            )}
        </>
       
    )
}
