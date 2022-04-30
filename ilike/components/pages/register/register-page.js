import React, {useEffect} from 'preact/compat'
import Head from 'next/head'
import HeaderLogin from '@templates/header-login';
import FormRegisterBody from './components/form-register-body';
import MainRegisterMobileBody from '@templates/mobile/main-register-mobile-body';
import HeaderAuthMobile from '@components/templates/mobile/header/header-auth-mobile';

export default function RegisterPage() {

    return (
        <>
            <Head>
                <title>Đăng ký</title>
            </Head>
            <div className="v-desktop">
                <HeaderLogin />
                <div className="login-form register-form">
                    <div className="container">
                        <h1>Đăng ký</h1>
                        <FormRegisterBody />
                    </div>
                </div>
            </div>
            <div className="v-mobile">
                <HeaderAuthMobile />
                <div className="wrapper mtop30">
                    <main id="main" className="main-mobile">
                        <div className="container">
                            <MainRegisterMobileBody />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
