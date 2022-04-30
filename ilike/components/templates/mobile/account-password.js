import React from 'preact/compat'

export default function AccountPassword() {
    return (
        <div className="wrapper">
            <main id="main" className="main-mobile">
                <div className="container">
                    <div className="account-section account-edit-email-section">
                        <h3 className="account-sm-heading nopad">Đổi mật khẩu</h3>
                        <h4 className="welcome-sm-text mtop10">Mật khẩu của bạn để đảm bảo tính bảo mật cho tài khoản của bạn.</h4>
                        <div className="form-main login-form-main mtop20">
                            <div className="field">
                                <label className="mb-section-heading nopad flex flex-align-center"> <strong>Mật khẩu hiện tại</strong></label>
                                <input type="password" name="txtPassword" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                            </div>
        
                            <div className="field mtop10">
                                <label className="mb-section-heading nopad flex flex-align-center"> <strong>Mật khẩu mới</strong></label>
                                <input type="password" name="txtNewPassword" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                            </div>
                            <div className="field mtop10">
                                <label className="mb-section-heading nopad flex flex-align-center"> <strong>Xác nhận mật khẩu mới</strong></label>
                                <input type="password" name="txtReNewPassword" className="mb-form-field mb-form-field mb-form-comment-field mtop5" value="" />
                            </div>
                            <div className="field flex mtop10">
                                <a className="mb-button mb-5rounded mb-button-defpad mb-black-button mb-login-button w100p" href="#">Lưu thay đổi</a>
                                <a className="mb-button mb-5rounded mb-button-defpad mb-gray-button mb-login-button w100p mtop10" href="#">Hủy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
