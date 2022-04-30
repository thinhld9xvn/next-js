import React from 'preact/compat'
import TemplateFooterSupporter from '../template-footer-supporter'
import { injectIntl } from 'react-intl';
function ColSupporter({ data, intl }) {
    const {messages} = intl;
    const arrCskhItems = data ? data.split('\r\n').map((item, i) => <TemplateFooterSupporter data = {item} 
                                                                                            index = {i}
                                                                                            key = {i} />) : null;
    return (
        <div className="col-support-ft col-md-6">
            <h3 className="s18 ft-tit">{messages.cskh}</h3>
            <ul className="list-unstyled light t6 ft-add ft-list">
                {arrCskhItems}
            </ul>
        </div>
    )
}
export default injectIntl(ColSupporter);
