import { CONTACT_FORMS } from '@constants/constants';
import React, {useState, useEffect} from 'preact/compat'
import ContactPopup from './footer-page/contact-popup';
import ContactSection from './footer-page/contact-section';
export default function FooterPage({ data }) {
    const {contact_form} = data;
    const [activeSlug, setActiveSlug] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {        
        setActiveSlug(location.pathname.split('/').pop());
        document.addEventListener('mouseup', function(e) {
            try {
                const modal = document.querySelector('.popup.__contact .content-modal');
                if ( !modal.contains(e.target) ) {
                    setShowPopup(false);
                }
            } catch {
            }
        });
    }, []);
    
    return (
        <>
            <ContactSection data = {data}
                            props = {{activeSlug, setShowPopup}} />
            <ContactPopup data = {contact_form}
                          showPopup = {showPopup}
                          setShowPopup = {setShowPopup}
                          cfForms = {CONTACT_FORMS} />            
        </>
    )
}
