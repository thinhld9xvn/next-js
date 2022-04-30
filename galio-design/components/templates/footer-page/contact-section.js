import React from 'preact/compat'
import Link from 'next/link'
import { PAGE_CONTACTS } from '@constants/constants';
export default function ContactSection({ data, props }) {
    const {heading, contents, button_text, button_url} = data;
    const {activeSlug, setShowPopup} = props;
    const Button = <button className="button" data-button="1300">
                        <span className="button__text">
                            {button_text}
                        </span>
                        <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <rect className="button__shape" height="100%" width="100%"></rect>
                        </svg>
                    </button>
    const showPopupBox = (e) => {
        e.preventDefault();        
        setShowPopup(true);
    }
    return (
        <section className="cmContact">
            <h3 className="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                {heading}
            </h3>
            <div dangerouslySetInnerHTML={{
                __html : contents
            }}> 
            </div>
            {PAGE_CONTACTS.indexOf(activeSlug) === -1 ? (
                <Link href={button_url} >
                    {Button}
                </Link>
            ) : (
                <a href="#"
                    onClick={showPopupBox}>
                    {Button}
                </a>
            )}
        </section>
    )
}
