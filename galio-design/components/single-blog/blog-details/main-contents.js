import React from 'preact/compat'
import {injectIntl} from 'react-intl';
function MainContents({ data, intl }) {
    const {messages} = intl;
    const {title, day, month, year, contents} = data;
    return (
        <>
            <div className="container__content">
                <h1 className="detail__title">
                    {title}
                </h1>
                <time className="detail__time">
                    {day} {messages.month} {month}, {year}
                </time>                    
            </div>
            <div dangerouslySetInnerHTML={{
                    __html : contents
                }}>
                
            </div>
        </>
    )
}

export default injectIntl(MainContents)
