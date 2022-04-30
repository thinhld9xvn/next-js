import { CONSUMER_KEY, CONSUMER_SECRET, LANGUAGES, TOASTR_DEF_OPTIONS, WP_WEBSITE_URL } from '@constants/constants';
import axios from 'axios';
import { saveCartsToStorage } from './shoppingCartsUtils';
import toastr from 'toastr';
const REQUIRED_FIELD_MSG = 'Không được bỏ trắng trường này';
const REQUIRED_FIELD_EN_MSG = 'This field is required';
const REQUIRED_EMAIL_MSG = 'Trường này phải là một email hợp lệ';
const REQUIRED_EMAIL_EN_MSG = 'This field must be a valid email';
const REQUIRED_TEL_MSG = 'Trường này phải là một số điện thoại hợp lệ';
const REQUIRED_TEL_EN_MSG = 'This field must be a valid telephone number';
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
async function createWooOrder(data) {   
    /*const wooCommerce = new WooCommerceAPI({
        url: WP_WEBSITE_URL, // Your store URL
        ssl: false,
        consumerKey: 'ck_fd0878feb362e72c3abfbdc1f5874de7588d7112', // Your consumer secret
        consumerSecret: 'cs_ccde5dea9ac18b677e34fbfac4b4f58f72275b39', // Your consumer secret
        wpAPI: true, // Enable the WP REST API integration
        version: 'wc/v1', // WooCommerce WP REST API version
        queryStringAuth: true
      });*/
      const config = {
        headers: {
            consumer_key: CONSUMER_KEY,
            consumer_secret: CONSUMER_SECRET
        }
      }
    return await axios.post(`${WP_WEBSITE_URL}/wp-json/wc/v3/orders`, data, config);          
}
export async function onClick_createWoocommerce(e, cartsList, UpdateCartsList, setLoading, messages, locale) {
    e.preventDefault();
    let boolValidate = true;
    let boolFormValidate = true;
    const fields = document.querySelectorAll('.cqj-field');  
    fields.forEach(field => {
      const type = field.type;
      switch (type) {
          case 'text' : 
              boolValidate = validateTextField(field);
              boolFormValidate = boolFormValidate && boolValidate;
              setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_FIELD_MSG : REQUIRED_FIELD_EN_MSG);
              break;
          case 'email' : 
              boolValidate = validateEmailField(field);
              boolFormValidate = boolFormValidate && boolValidate;
              setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_EMAIL_MSG : REQUIRED_EMAIL_EN_MSG);
              break;
          case 'tel' :
              boolValidate = validatePhoneField(field);
              boolFormValidate = boolFormValidate && boolValidate;
              setValidateField(field, boolValidate, locale === LANGUAGES.vi ? REQUIRED_TEL_MSG : REQUIRED_TEL_EN_MSG);
              break;
      }        
  });
  if ( !boolFormValidate ) {
      return;
  }   
    setLoading(true);
    const frmCheckout = document.getElementById('frmCheckout');    
    const last_name = document.getElementById('txtLastName').value,
          first_name = document.getElementById('txtFirstName').value,
          email = document.getElementById('txtEmail').value,
          phone = document.getElementById('txtPhone').value,
          address = document.getElementById('txtAddress').value;
    const data = {
        payment_method : 'bacs',
        payment_method_title: "Trả tiền mặt khi nhận hàng",
        set_paid: true,
        billing: {
            first_name,        
            last_name,        
            email,
            phone,
            address_1: address,
            address_2 : '',
            country: "VN"       
        },
        shipping: {
            first_name,        
            last_name,        
            email,
            phone,
            address_1: address,
            address_2 : '',
            country: "VN"           
        },
        line_items: []
      };
      cartsList.forEach(cart => {        
        data.line_items.push({
            product_id: parseInt(cart.id),
            quantity: cart.count
        })
      });
    let results = await createWooOrder(data);
    UpdateCartsList([]);
    saveCartsToStorage([]);
    frmCheckout.reset();
    toastr.success(messages['checkout_success_message'], messages['noti'], TOASTR_DEF_OPTIONS);
    setLoading(false);
}