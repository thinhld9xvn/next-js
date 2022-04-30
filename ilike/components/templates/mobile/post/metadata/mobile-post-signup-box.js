import React from 'preact/compat'

export default function MobilePostSignupBox() {
    return (
        <div className="post-signup-form single-signup-form">
            <h4 className="post-singup-heading">Đăng ký nhận thông báo bất kỳ khi nào có bài viết mới từ: Điểm đến trẻ</h4>
            <div className="form-main mtop30">
                <div className="field flex"><input type="text" className="mb-form-field mb-field-email" name="txtEmail" value="" placeholder="Email của bạn" /></div>
                <div className="field flex mtop20">
                    <a className="mb-button mb-green-button mb-5rounded mb-button-defpad mb-signup-button" href="#"> <span className="fa fa-envelope-o"></span> <span className="padleft5">Đăng ký ngay</span> </a>
                </div>
            </div>
        </div>
    )
}
