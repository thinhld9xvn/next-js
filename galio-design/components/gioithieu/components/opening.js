import React from 'preact/compat'

export default function Opening({ data }) {
    const {heading, introduction} = data;
    return (
        <>
            <h1 className="bg-title" data-split-letters="1500">ABOUT</h1>
            <div className="container__content">
                <h2 className="title_global" data-split-letters="2000">{heading}</h2>
                <div className="desc__global"
                     dangerouslySetInnerHTML={{
                         __html : introduction
                     }}>                    
                </div>
            </div>
        </>
    )
}
