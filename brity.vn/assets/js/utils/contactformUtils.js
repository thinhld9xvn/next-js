import axios from "axios";
import {WP_WEBSITE_URL} from "@constants/constants"

export function onSubmit_submitCf7(e) {

    e.preventDefault();

    const form = document.getElementById('contactform');

    const fd = new FormData();

    fd.append('your-name', document.getElementById('name').value);
    fd.append('your-email', document.getElementById('email').value);
    fd.append('your-message', document.getElementById('message').value);

    axios.post(WP_WEBSITE_URL + '/wp-json/contact-form-7/v1/contact-forms/93/feedback',
                fd)
        .then(function(response) {

            const { data } = response;

            if ( data.status === 'mail_sent' ) {

                form.reset();

                alert('Bạn đã gửi mail thành công, chúng tôi sẽ phản hồi lại với bạn sớm !!!');

            }

            else {

                alert('Có lỗi xảy ra, mời bạn thử lại !!!');

            }

        });

}
