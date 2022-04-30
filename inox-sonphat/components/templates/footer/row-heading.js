import React from 'preact/compat'
import { injectIntl } from 'react-intl';
function RowHeading({intl}) {
    const {messages} = intl;
    return (
        <div className="col-sm-12">
            <h2 className="text-lg-left text-center logoft default-pb-xs">
                <a className="d-flex align-items-center justify-content-center">
                    <span className="bold text-uppercase s24 px-3">{messages.company_limited}</span>
                </a>
            </h2>
        </div>
    )
}
export default injectIntl(RowHeading);
