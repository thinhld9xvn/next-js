import axios from "axios";
import {LANGUAGES, WP_WEBSITE_URL} from "@constants/constants"
const REQUIRED_FIELD_MSG = 'Không được bỏ trắng trường này';
const REQUIRED_FIELD_EN_MSG = 'This field is required';
const REQUIRED_EMAIL_MSG = 'Trường này phải là một email hợp lệ';
const REQUIRED_EMAIL_EN_MSG = 'This field must be a valid email';
const REQUIRED_URL_MSG = 'Trường này phải là một url hợp lệ';
const REQUIRED_URL_EN_MSG = 'This field must be a valid url';
const REQUIRED_TEL_MSG = 'Trường này phải là một số điện thoại hợp lệ';
const REQUIRED_TEL_EN_MSG = 'This field must be a valid telephone number';
const REQUIRED_FILE_MSG = 'Mời chọn một tài liệu cần đính kèm';
const REQUIRED_FILE_EN_MSG = 'This field must be a valid document attachment';
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
function showLoading(form) {
    const submit = form.querySelector('.submit');
    const form_group = form.querySelector('.form-group');
    form_group.classList.add('form-disabled');    
    submit.classList.add('loading');
    submit.classList.add('form-disabled');
}
function hideLoading(form) {
    const submit = form.querySelector('.submit');
    const form_group = form.querySelector('.form-group');
    form_group.classList.remove('form-disabled');
    submit.classList.remove('form-disabled');
    submit.classList.remove('loading');
}
export function resizeCtForm() {
    const modal = document.querySelector('.content-modal');
    const form_box = document.querySelector('.form__box');
    const button_upload = document.querySelector('.btn__upload');
    if ( button_upload ) {
        const filename_selected = button_upload.querySelector('span');
        let width = 0;
        if ( filename_selected ) {
            if ( window.innerWidth > 768 ) {
                width = (modal.clientWidth - form_box.clientWidth) / 2;
            }
            else {
                width = modal.clientWidth - button_upload.clientWidth - 50 * 2;
            }
            filename_selected.style.width = width + 'px';
            filename_selected.style.right = ((-width) - 20) + 'px';
        }
    }
}
export async function onSubmit_submitCf7(e, locale, cfForms) {
    e.preventDefault();
    let boolValidate = true;
    let boolFormValidate = true;
    const target = e.currentTarget;
    const modal = target.closest('.modal-frame');
    const form = modal.querySelector('.wpcf7-form');
    const fields = form.querySelectorAll('*[aria-required="true"]');  
    fields.forEach(field => {
        const type = field.type;
        switch (type) {
            case 'text' : 
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_FIELD_MSG : REQUIRED_FIELD_EN_MSG);
                break;
            case 'textarea' : 
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_FIELD_MSG : REQUIRED_FIELD_EN_MSG);
                break;
            case 'email' : 
                boolValidate = validateEmailField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_EMAIL_MSG : REQUIRED_EMAIL_EN_MSG);
                break;
            case 'url' : 
                boolValidate = validateUrlField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_URL_MSG : REQUIRED_URL_EN_MSG);
                break;
            case 'tel' :
                boolValidate = validatePhoneField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_TEL_MSG : REQUIRED_TEL_EN_MSG);
                break;
            case 'file' :
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_FILE_MSG : REQUIRED_FILE_EN_MSG, true);
                break;
            case 'select-one' : 
                boolValidate = validateTextField(field);
                boolFormValidate = boolFormValidate && boolValidate;
                setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_FIELD_MSG : REQUIRED_FIELD_EN_MSG);
                break;
        }        
    });
    if ( !boolFormValidate ) {
        return;
    }   
    showLoading(modal);
    const fd  = new FormData(form);
    const fid = cfForms[locale.toUpperCase()];  
    axios.interceptors.response.use(
        res => res,
        err => false
    );
    const response = await axios.post(WP_WEBSITE_URL + `/wp-json/contact-form-7/v1/contact-forms/${fid}/feedback`, fd);
    if ( !response ) {
        alert('Error, please try again !!!');
        hideLoading(modal);
        return;
    }
    const { data } = response;
    if ( data.status === 'mail_sent' ) {
        form.reset();
        //alert('Success !!!');
    }
    else {
        alert('Error, please try again !!!');
    }
    hideLoading(modal);
}
