import { getContactUrlByLocale, getSearchUrlByLocale } from '@js_dir/utils/urlUtils'
import { useRouter } from 'next/router'
import React from 'preact/compat'
import {injectIntl} from 'react-intl'

function MenuSctrollBar({ data, showSidebar, intl }) {
    const {locale} = useRouter();
    const {messages} = intl;
    const id = data.findIndex(e => e.props.id === 'headernavigation');
    if ( id !== -1 ) {
        data.splice(id, 1);
    }
    return (
        <div className={"menu-sctroll-container ".concat(showSidebar ? 'active' : '')}>
            <div className="container">
                <div className="scrtoll-wrapper">
                    <div className="scrtoll-elements">
                        <div className="col-12 col-md-6 scrtoll-opening">
                            <div className="info-contact-popup">
                                <div className="box">
                                    <p>General Inquiries:</p>
                                    <p><strong>info@yodezeen.com</strong></p>
                                </div>
                                <div className="box">
                                    <p>PR&Collaborations:</p>
                                    <p><strong>pr@yodezeen.com</strong></p>
                                </div>
                                <div className="box">
                                    <p>Careers:</p>
                                    <p><strong>info@yodezeen.com</strong></p>
                                </div>
                            </div>
                            <div className="info-form">
                                <p className="data-info">For each project the approach rests on a careful <br /> understanding of the space, or the site’s.</p>
                                <a href={getContactUrlByLocale(locale)} >
                                    <button className="button" data-button="1500">
                                        <span className="button__text">
                                            {messages.heading_contact}
                                        </span>
                                        <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                            <rect className="button__shape" height="100%" width="100%"></rect>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xs-12">
                            <div className="big-menu">
                                <ul>
                                    {data}
                                </ul>
                            </div>
                            <div className="form-search-sctroll">
                                <form action={getSearchUrlByLocale(locale)}>
                                    <input type="text" placeholder="Search..." />
                                    <button><img src="/static/images/icons/icon__search.png" alt="icon__search.png" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default injectIntl(MenuSctrollBar);
