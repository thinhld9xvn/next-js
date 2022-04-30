import React, {useEffect} from 'preact/compat'
import { useRouter } from 'next/router';
import {injectIntl} from 'react-intl'
import { onSubmit_submitCf7, resizeCtForm } from '@js_dir/utils/contactformUtils';
import { CONTACT_FORMS } from '@constants/constants';
function ContactPopup({ className = '__contact', buttonClassName = 'button__white', data, showPopup, setShowPopup, cfForms = CONTACT_FORMS, intl }) {
    const {messages} = intl;
    const {locale} = useRouter();
    const onClick_closeModal = (e) => {
        e.preventDefault();
        setShowPopup(false);
    }
    useEffect(() => {
        setTimeout(function () {
            const btnUploads = document.querySelector('.btn__upload');            
            const btnFile = document.getElementById('btn__file');
            btnUploads && 
                btnUploads.addEventListener('click', function(e) {
                    btnFile && btnFile.click();
                });
            btnFile && 
                btnFile.addEventListener('change', function(e) {
                    const fileNameElemSelected = btnUploads.querySelector('span');
                    const filename = e.target.value.split('\\').pop();
                    if ( !fileNameElemSelected ) {
                        const elem = document.createElement('span');
                        elem.innerHTML = filename;
                        btnUploads.append(elem);
                    }
                    else {
                        fileNameElemSelected.innerHTML = filename;
                    }
                    resizeCtForm();
                });
            window.addEventListener('resize', function() {
                resizeCtForm();
            });
        }, 200);        
    }, []);
    return (
        <section className={"popup popup-contact ".concat(className, ' ', showPopup ? 'show-modal' : '')}>
            <div className="modal-frame">
                <div className="content-modal">
                    <button className="btn btn__close"
                            onClick={onClick_closeModal}>
                        <img src="/static/images/icons/icon__close-1.png" alt="icon__close.png" />
                    </button>
                    <div className="contact__group">
                        <div className="main__contact"
                             dangerouslySetInnerHTML={{
                                 __html : data
                             }}>
                        </div>
                        <a href="#" className={`button ${buttonClassName} submit`} data-button="1300"
                            onClick={e => onSubmit_submitCf7(e, locale, cfForms)}>
                            <span className="button__text">
                                {messages.send_request}
                                <i id="spin-loading" className="fa fa-circle-o-notch fa-spin spin-loading"></i>
                            </span>
                            <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect className="button__shape" height="100%" width="100%"></rect>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default injectIntl(ContactPopup)
