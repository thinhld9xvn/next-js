import React from 'preact/compat'
export default function DetailsBanner({ data }) {
    return (
        <div className="banner text-center">
            <a href="#" title="" className="link-ef">
                <img src={data} title="" alt="" />
            </a>
        </div>
    )
}
