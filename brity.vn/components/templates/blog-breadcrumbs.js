import React from 'preact/compat'

export default function BlogBreadcrumbs({ data }) {

    return (

        <>
            {data ? (

                <div className={`page-header type-two box-animate`}>
                    <span className="little-title">{data.title || data.text}</span>
                    <h1 className="title">{data.heading}</h1>
                </div>

            ) : null}
        </>

    )

}
