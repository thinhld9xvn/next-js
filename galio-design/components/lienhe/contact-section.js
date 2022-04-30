import React from 'preact/compat'
import {injectIntl} from 'react-intl'

function ContactSection({ data, intl }) {
    const {messages} = intl;
    const {hotline, email, email_recruit} = data;
    return (
        <section className="page__contact">
            <div className="container__contact">
                <h3 className="contact__title" data-split-letters="1000">
                    {messages.heading_contact}
                </h3>
                <div className="info__contact">
                    <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <p>
                            Holine
                        </p>
                        <b>
                           {hotline}
                        </b>
                    </div>
                    <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                        <p>
                            Email
                        </p>
                        <b>
                            {email}
                        </b>
                    </div>
                    <div className="info-item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.3s">
                        <p>
                            {messages.email_recruitment}
                        </p>
                        <b>
                           {email_recruit}
                        </b>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default injectIntl(ContactSection)
