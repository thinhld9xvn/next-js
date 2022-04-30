import React, {useEffect} from 'preact/compat'

import toastr from 'toastr';

import { PAGES, TOASTR_DEF_OPTIONS } from '@constants/constants';
import { isDiff } from '@js_dir/utils/arrayUtils';
import { register } from '@lib/registerApi';

async function onSubmit_registerPage(e) {

    e.preventDefault();

    const name = document.getElementById('txtFullName').value,
          email = document.getElementById('txtEmail').value,
          password = document.getElementById('txtPassword').value,
          retypePassword = document.getElementById('txtRePassword').value;

    if ( isDiff(password, retypePassword ) ) {

        toastr.error('Mật khẩu xác nhận không đúng !!!', 'Lỗi', TOASTR_DEF_OPTIONS);

        return false;

    }

    const results = await register(name, email, password, retypePassword);

    if ( results ) {

        toastr.success('Đăng ký thành công !!!', 'Thông báo', TOASTR_DEF_OPTIONS);

        window.location.href = PAGES.LOGIN.path;

        return true;

    }

    toastr.error('Có lỗi xảy ra trong quá trình đăng ký, mời thử lại !!!', 'Lỗi', TOASTR_DEF_OPTIONS);

    return false;

}

export default function FormRegisterBody() {
    return (
        <form id="frmRegister" 
            className="frmLogin frmRegister"
            onSubmit={onSubmit_registerPage}>
            <legend>
                <div className="field">
                    <label>Họ tên</label>
                    <input type="text" 
                            id="txtFullName" 
                            className="form-control" 
                            name="txtFullName" 
                            value=""
                            minLength="2"
                            maxLength="100"
                            required />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" 
                            id="txtEmail" 
                            className="form-control" 
                            name="txtEmail" 
                            value=""
                            required />
                </div>
                <div className="field">
                    <label>Mật khẩu</label>
                    <input type="password" 
                            id="txtPassword" 
                            className="form-control" 
                            name="txtPassword" 
                            value=""
                            minLength="6"
                            required />
                </div>
                <div className="field">
                    <label>Nhập lại mật khẩu</label>
                    <input type="password" 
                            id="txtRePassword" 
                            className="form-control" 
                            name="txtRePassword" 
                            value=""
                            minLength="6"
                            required />
                </div>
                <div className="field sm">
                    <button type="submit" className="btn btn-primary">Đăng ký</button>    
                </div>
            </legend>
        </form>
    )
}
