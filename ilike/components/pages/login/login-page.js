import React, {useState, useEffect} from 'preact/compat'
import Head from 'next/head'
import HeaderLogin from '@templates/header-login';
import FormLoginBody from './components/form-login-body';
import HeaderAuthMobile from '@components/templates/mobile/header/header-auth-mobile';
import MainLoginMobileBody from '@templates/mobile/main-login-mobile-body';
import { isMobile } from '@js_dir/utils/deviceUtils';
import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginPage({ providers }) {
    const [isMobileDevice, setMobileDevice] = useState(false);
    const {data : session} = useSession();
    useEffect(() => {
        setMobileDevice(isMobile());
        return () => {
        }
    }, []);
    if ( session ) {
        window.location.href = '/';
        return;
    }
    return (
        <>
            <Head>
                <title>Đăng nhập</title>
            </Head>
            {!isMobileDevice ?  (
                <div className="v-desktop">
                    <HeaderLogin />                
                    <div className="login-form">
                        <div className="container">
                            <h1>Đăng nhập</h1>
                            <FormLoginBody />
                        </div>                
                    </div>
                </div>
            ) : (
                <div className="v-mobile">
                    <HeaderAuthMobile />
                    <div className="wrapper mtop30">
                        <main id="main" className="main-mobile">
                            <div className="container">
                                <MainLoginMobileBody providers = {providers}
                                                     signIn = {signIn} />
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}
