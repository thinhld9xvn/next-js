import { login } from '@lib/loginApi';
import toastr from 'toastr';
import { ACCOUNT_PAGE_URL, TOASTR_DEF_OPTIONS } from '@constants/constants';
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
    return password.length >= 6;
}
export async function onClick_handleLoginPage(e) {
    e.preventDefault();
    let boolValidate = true;
    const txtUserName = document.getElementById('txtUserName').value,
          txtPassword = document.getElementById('txtPassword').value;
    if ( ! validateEmail(txtUserName) ) {
        toastr.error('Username phải là một địa chỉ email hợp lệ !!!', 'Lỗi', TOASTR_DEF_OPTIONS);
        boolValidate = false;
    }
    if ( ! validatePassword(txtPassword) ) {
        toastr.error('Password phải chứa tối thiểu 6 ký tự !!!', 'Lỗi', TOASTR_DEF_OPTIONS);
        boolValidate = false;
    }
    if ( ! boolValidate ) return false;
    const results = await login(txtUserName, txtPassword);
    if ( results ) {
        window.location.href = ACCOUNT_PAGE_URL;
        return true;
    }
    toastr.error('Có lỗi xảy ra hoặc thông tin đăng nhập không chính xác !!!', 'Lỗi', TOASTR_DEF_OPTIONS);
    return false;
}