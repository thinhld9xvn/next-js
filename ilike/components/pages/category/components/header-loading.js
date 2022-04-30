import React from 'preact/compat'
import PdLoadingSquare from '@loading/pd-loading-square'

export default function HeaderLoading() {
    return (
        <section className="banner__global">

            <div className="container">

                <h1 className="title__banner">
                    <PdLoadingSquare size = "small" />
                </h1>

                <div className="banner__group">
                    <ul>
                        <li style={{ width: "200px" }}>
                            <PdLoadingSquare size = "small" />
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    )
}
