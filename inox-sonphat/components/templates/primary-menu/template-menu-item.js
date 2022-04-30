import React from 'preact/compat'
import Link from 'next/link'
import { isValidateMega, isValidateSub, isNotValidateMega } from '@js_dir/utils/menuUtils';
export default function TemplateMenuItem({ data, child = false, mega = false, submega = false, mobile = false }) {
    const arrSubItems = isValidateSub(data) ? data.childrens.map(sub => <TemplateMenuItem key={sub.id}
                                                                                          data = {sub}
                                                                                          child = {true}
                                                                                          mega = {isValidateMega(data)}
                                                                                          submega = {mega}
                                                                                          mobile = {mobile} />) : null;
    const {id, text, background_color, border_color, border_width, url} = data;
    return (
        <li key={id}>
            {!child || (child && submega) ? (
                <>
                    <Link href={url}>
                        <a>
                            {text}
                            {!mobile && isValidateSub(data) ? (
                                <span className="fa fa-angle-down drop-down-icon"></span>
                            ) : null}
                        </a>
                    </Link>                    
                </>
            ) : null}
            {child && mega ? (
                <Link href={url}>
                    <a>
                        {!mobile ? (
                            <>
                                <span>{text}</span>
                                {border_width && border_color ? (
                                    <span className="tag" style={{
                                                                    backgroundColor: background_color || '#fff',
                                                                    border: border_width && border_color ? `${border_width}px solid ${border_color}` : 'unset'
                                                                }}></span>
                                ) : null}
                            </>
                        ) : (
                            <>
                                {text}
                            </>
                        )}
                    </a>
                </Link>
            ) : null}
            {isValidateMega(data) ? (
                <>
                    {!mobile ? (
                        <div className='submega'>
                            <div className="container">
                                <ul>
                                    {arrSubItems}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <>
                            <ul>
                                {arrSubItems}
                            </ul>
                        </>
                    )}
                </>
            ) : null}
            {isNotValidateMega(data) ? (
                <>
                    <ul>
                        {arrSubItems}
                    </ul>
                </>
            ) : null}            
        </li>
    )
}
