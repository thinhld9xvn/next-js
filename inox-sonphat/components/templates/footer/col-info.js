import React from 'preact/compat'
import { injectIntl } from 'react-intl';
function ColInfo({ data, intl }) {
    const {messages} = intl;
    const {address, hotline, email, website} = data || {};
    return (
        <div className="col-contact-ft col-md-6">
            <h3 className="s18 ft-tit">{messages.ttlh}</h3>
            <ul className="list-unstyled t6 ft-add">
                <li>
                    <img src="/static/images/home.png" /> 
                    <span dangerouslySetInnerHTML={{
                        __html : address
                    }}></span>
                </li>
                <li>
                    <img src="/static/images/phone.png" /> 
                    <span>{hotline}</span>
                </li>
                <li>
                    <img src="/static/images/mail.png" /> 
                    <span>{email}</span>
                </li>
                <li>
                    <img src="/static/images/globe.png" />
                    <span dangerouslySetInnerHTML={{
                        __html : website
                    }}>
                    </span>
                </li>
            </ul>
        </div>
    )
}
export default injectIntl(ColInfo);
