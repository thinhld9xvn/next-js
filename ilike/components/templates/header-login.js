import { DEFAULT_LOGO, HOME_PAGE_URL } from '@constants/constants'
import { getSiteOption } from '@lib/getSiteOptionApi';
import React, {useState, useEffect} from 'preact/compat'
export default function HeaderLogin() {
    const [logo, setLogo] = useState(null);
    useEffect(async () => {
        const siteOptions = await getSiteOption();
        if ( siteOptions ) {
            const logo = siteOptions.find(o => o.option_name === 'logo');
            if ( logo ) {
                setLogo(logo.option_value);
            }
            else {
                setLogo(DEFAULT_LOGO);
            }
        } 
    }, []);
    return (
        <>
            {logo ? (
                <header className="lg-header">
                    <div className="container">
                        <div className="header-logo">
                            <a className="logo" 
                                title="ilike" 
                                href={HOME_PAGE_URL}>
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                </header>
            ) : null}
        </>
    )
}
