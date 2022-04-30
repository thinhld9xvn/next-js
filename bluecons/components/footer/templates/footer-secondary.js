import { useRouter } from 'next/router';
import React, {useEffect, useCallback} from 'preact/compat'
export default function FooterSecondary({ data }) {
    const {footer_menu} = data;
    const router = useRouter();
    const handleFooterLink = useCallback((e) => {
        e.preventDefault();
        router.push(e.currentTarget.getAttribute('href'));
    }, []);
    useEffect(() => {
        setTimeout(() => {
            try {
                document.querySelector('.footer .footer-bot')
                        .querySelectorAll('a')
                        .forEach(elem => {
                            elem.addEventListener('click', handleFooterLink);
                        });
                document.querySelector('.footer .col-menu.col-menu-support')
                        .querySelectorAll('a')
                        .forEach(elem => {
                            elem.addEventListener('click', handleFooterLink);
                        });
                document.querySelector('.footer .col-menu.col-menu-info')
                        .querySelectorAll('a')
                        .forEach(elem => {
                            elem.addEventListener('click', handleFooterLink);
                        });
            } catch {

            }
        }, 200);
    }, []);
    return (
        <>
            {footer_menu ? (
                <div className="footer-bot">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{
                            __html : footer_menu
                        }}></div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
