import React from 'preact/compat'
import Cf7Widget from './cf7-widget'

export default function ContactItemWidget({ data }) {
    return (
        <div className="_item">
            <h2 className="vk-footer__title">Liên hệ</h2>
            <Cf7Widget />
            <div className="_copyright">{data}</div>
        </div>
    )
}
