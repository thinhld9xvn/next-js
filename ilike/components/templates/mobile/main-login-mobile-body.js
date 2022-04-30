import { ACCOUNT_PAGE_URL } from '@constants/constants'
import { onClick_handleLoginPage } from 'handleEvents/onClick_handleLoginPage'
import React from 'preact/compat'
export default function MainLoginMobileBody({ providers, signIn, showRegisterModalCallback }) {
    const loginSocialsProviders = Object.values(providers).map((provider) => (
        <div className="flex mtop10" key={provider.name}>
            <a className="mb-button mb-5rounded mb-button-defpad mb-default-button mb-lg-social-button mb-lg-facebook-button flex flex-align-center w100p" 
                href="#"
                onClick={() =>signIn(provider.id, { callbackUrl: ACCOUNT_PAGE_URL })}>
                <img className="mb-idefault" src={provider.name.toLowerCase() === 'facebook' ? 
                            "/static/images/fb-icon.svg" : 
                            "/static/images/google-icon.svg"} alt="" /> 
                <span className="padleft10">Đăng nhập bằng {provider.name}</span>
            </a>
        </div>
      ))
    return (
        <div className="account-section modal-login">
            <h2 className="login-heading">Đăng nhập</h2>
            <div className="form-main login-form-main mtop20">
                <div className="field">
                    <label className="mb-section-heading nopad flex flex-align-center"> <strong>Email</strong></label>
                    <input type="text" id="txtUserName" name="txtUserName" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                </div>

                <div className="field mtop10">
                    <label className="mb-section-heading nopad flex flex-align-center"> <strong>Mật khẩu</strong></label>
                    <input type="text" id="txtPassword" name="txtPassword" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                </div>

                <div className="field flex mtop10">
                    <a className="mb-button mb-5rounded mb-button-defpad mb-black-button mb-login-button w100p" 
                        href="#"
                        onClick={onClick_handleLoginPage}>Tiếp tục</a>
                    <a className="mb-button mb-button-defpad mb-default-button mb-forget-button w100p" href="#">Quên mật khẩu</a>
                </div>
                <hr className="mb-hr-line __lg" />
                <div className="login-by-socials mtop10">
                    <p className="login-sc-caption">Hoặc đăng nhập bằng</p>
                    <div className="login-sc-form">
                        {loginSocialsProviders}
                    </div>
                    <div className="flex flex-justify-center modal-cm-text mtop20">
                        Bạn chưa có tài khoản? 
                        <a className="padleft5" 
                            href="#"
                            onClick={showRegisterModalCallback}>
                            <strong>Đăng ký</strong>
                        </a>
                    </div>
                    <div className="flex flex-justify-center lg-policies mtop70">Nếu bạn tiếp tục tức là bạn đồng ý với <a href="#">Chính sách</a> và <a href="#">Điều khoản</a> của chúng tôi</div>
                </div>
            </div>    
        </div>
    )
}
