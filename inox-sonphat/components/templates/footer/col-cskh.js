import React from 'preact/compat'
import { injectIntl } from 'react-intl';
import Link from 'next/link'
function ColCskh({intl, data}) {
    const {messages} = intl;
    const arrMenuList = data.map(item => <li key={item.url}><Link href={item.url} title="">{item.text}</Link></li>);
    return (
        <div className="col-policities-ft col-md-6">
            <h3 className="s18 ft-tit">{messages.csbh}</h3>
            <ul className="list-unstyled light t6 ft-list ft-policies">
                {arrMenuList}
            </ul>
        </div>
    )
}
export default injectIntl(ColCskh);