import React from 'preact/compat'
import { FormattedMessage } from 'react-intl'
import TemplateFooterSocial from './footer-social/template-footer-social'

export default function FooterSocial({ data }) {
    const socialList = data.map((item, i) => <TemplateFooterSocial data={item}
                                                                   key = {i} />);
    return (
        <div className="footer__icon-rules">
            <div className="footer__icon">
                {socialList}
            </div>
            <div className="footer__rules">
                <a href="#" className="footer-link">
                    <FormattedMessage id="terms_conditional" />
                </a>
            </div>
        </div>
    )
}
