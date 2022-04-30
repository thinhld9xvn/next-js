import { onClick_handleLoginPage } from 'handleEvents/onClick_handleLoginPage'
import React from 'preact/compat'
export default function FormLoginBody() {
    return (
        <form className="frmLogin">
            <legend>
                <div className="field">
                    <label>Tên đăng nhập / Email</label>
                    <input type="text" 
                            id="txtUserName"
                            className="form-control" 
                            name="txtUserName" 
                            value="" />
                </div>
                <div className="field">
                    <label>Mật khẩu</label>
                    <input type="password" 
                            id="txtPassword" 
                            className="form-control" 
                            name="txtPassword" 
                            value="" />
                </div>
                <div className="field sm">
                    <button className="btn btn-primary"
                            onClick={onClick_handleLoginPage}>Đăng nhập</button>    
                </div>
            </legend>
        </form>
    )
}
