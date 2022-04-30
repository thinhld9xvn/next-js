import React from 'preact/compat'
export default function Copyright({data}) {
    return (
        <div className="copyright text-center t7 s14 default-pb-xs"
            dangerouslySetInnerHTML={{
                __html : data
            }}>            
        </div>
    )
}
