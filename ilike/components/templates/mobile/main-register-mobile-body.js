import React from 'preact/compat'
export default function MainRegisterMobileBody({ showLoginModalCallback }) {
    return (
        <div className="account-section modal-login">
            <h2 className="login-heading">Tạo tài khoản</h2>
            <div className="form-main login-form-main mtop20">
                <div className="field">
                    <label className="mb-section-heading nopad flex flex-align-center"> <strong>Email</strong></label>
                    <input type="text" name="txtEmail" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                </div>

                <div className="field mtop10">
                    <label className="mb-section-heading nopad flex flex-align-center"> <strong>Mật khẩu</strong></label>
                    <input type="text" name="txtPass" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                </div>

                <div className="field mtop10">
                    <label className="mb-section-heading nopad flex flex-align-center"> <strong>Nhập mã</strong></label>
                    <input type="text" name="txtCode" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                </div>
                <div className="field flex mtop10">
                    <a className="mb-button mb-5rounded mb-button-defpad mb-black-button mb-login-button w100p" href="#">Tiếp tục</a>
                </div>
                <hr className="mb-hr-line __lg" />
                <div className="login-by-socials mtop10">
                    <div className="flex flex-justify-center modal-cm-text mtop20">
                        Bạn đã có tài khoản? 
                        <a className="padleft5" 
                            href="#"
                            onClick={showLoginModalCallback}>
                            <strong>Đăng nhập</strong>
                        </a>
                    </div>
                    <div className="flex flex-justify-center lg-policies mtop70">Nếu bạn tiếp tục tức là bạn đồng ý với <a href="#">Chính sách</a> và <a href="#">Điều khoản</a> của chúng tôi</div>
                </div>
            </div>
        </div>
    )
}
