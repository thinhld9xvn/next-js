import axios from "axios";
import toastr from 'toastr';
import {TOASTR_DEF_OPTIONS, WP_WEBSITE_URL} from "@constants/constants"
const REQUIRED_FIELD_MSG = 'Không được bỏ trắng trường này';
const REQUIRED_EMAIL_MSG = 'Trường này phải là một email hợp lệ';
const REQUIRED_URL_MSG = 'Trường này phải là một url hợp lệ';
const REQUIRED_TEL_MSG = 'Trường này phải là một số điện thoại hợp lệ';
const REQUIRED_FILE_MSG = 'Mời chọn một tài liệu cần đính kèm';
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "1000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
function validateTextField(field) {
    const value = field.value.trim();
    if ( value === '' ) {
        return false;
    } 
    return true;
}
function validateEmailField(field) {
    const value = field.value.trim();
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(value);
}
function validateUrlField(field) {
    const value = field.value.trim();  
    const urlRegex = /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
    return urlRegex.test(value);
}
function validatePhoneField(field) {
    const value = field.value.trim();  
    const reg = /[0-9]{9,11}/g;
    return reg.test(value);
}
function setValidateField(field, boolValidate, msg, isFile = false) {
    const e = !isFile ? field.parentElement.querySelector('.form-error-valid') :
                        field.closest('p').querySelector('.form-error-valid');
    if ( boolValidate ) {
        if ( e ) {
            e.remove();
        }
    }
    else {
        if ( e ) {
            e.innerHTML = msg;
        }
        else {
            const errorElem = document.createElement('span');
            errorElem.setAttribute('class', 'form-error-valid');
            errorElem.innerHTML = msg;
            if ( !isFile ) {
                field.parentElement.append(errorElem);
            }
            else  {
                field.closest('p').append(errorElem);
            }
        }
    }
}
function showLoading() {
    document.querySelector('.overlay-cf7').classList.add('loading');
}
function hideLoading() {
    document.querySelector('.overlay-cf7').classList.remove('loading');
}
export async function onSubmit_submitCf7(e, fid) {
    e.preventDefault();
    let boolValidate = true;
    let boolFormValidate = true;
    const target = e.currentTarget;
    const form = target.closest('.wpcf7-form');
    const fields = form.querySelectorAll('*[aria-required="true"]');  
    fields.forEach(field => {
        const type = field.type;
        switch (type) {
            case 'text' : 
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_FIELD_MSG);
                break;
            case 'textarea' : 
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_FIELD_MSG);
                break;
            case 'email' : 
                boolValidate = validateEmailField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_EMAIL_MSG);
                break;
            case 'url' : 
                boolValidate = validateUrlField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_URL_MSG);
                break;
            case 'tel' :
                boolValidate = validatePhoneField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_TEL_MSG);
                break;
            case 'file' :
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_FILE_MSG, true);
                break;
            case 'select-one' : 
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, REQUIRED_FIELD_MSG);
                break;
        }        
    });
    if ( !boolFormValidate ) {
        return;
    }   
    showLoading();
    const fd  = new FormData(form);
    axios.interceptors.response.use(
        res => res,
        err => false
    );
    const response = await axios.post(WP_WEBSITE_URL + `/wp-json/contact-form-7/v1/contact-forms/${fid}/feedback`, fd);
    if ( !response ) {
        toastr.error('Có lỗi khi gửi mail, vui lòng thử lại !!!', 'Thông báo');
        hideLoading();
        return;
    }
    const { data } = response;
    if ( data.status === 'mail_sent' ) {
        toastr.success('Gửi mail thành công !!!', 'Thông báo');
        form.reset();
    }
    else {
        toastr.error('Có lỗi khi gửi mail, vui lòng thử lại !!!', 'Thông báo');
    }
    hideLoading();
}
