import React from 'preact/compat'

import { connect } from 'react-redux';

import {setupWow} from '@js_utils/setupWowUtils';

import {onSubmit_submitCf7} from '@js_utils/contactformUtils';

function ContactPageMain({ data, currentArticle }) {

    setTimeout( function(){ 
      
        setupWow();

    }, 1000);

    return (

        <>
            {currentArticle ? (
                <>
                    <div className="container top_45 box-animate">
                        <div id="contact-formular" className="contact-form">
                            <div id="message"></div>
                            <form method="post" 
                                    action="" 
                                    name="contactform" 
                                    id="contactform" 
                                    className="row">
                                <div className="col-xl-6">
                                    <input className="inp" placeholder="Your Name" name="name" type="text" id="name" />
                                </div>

                                <div className="col-xl-6">
                                    <input className="inp" placeholder="Your Email" name="email" type="text" id="email" />
                                </div>

                                <div className="col-xl-12">
                                    <textarea className="inp-text" name="message" id="message" rows="4" placeholder="Message"></textarea>
                                </div>

                                <div className="col-xl-12 form-btn text-center top_45">
                                    <input className="site-btn magnetize" 
                                            data-dist="2" 
                                            data-cursor-type="medium" 
                                            type="submit" 
                                            value="Send it"
                                            onClick={onSubmit_submitCf7} />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container top_120 box-animate">
                        <div className="contact-infos text-center row">
                            <div className="col-xl-4 col-lg-4 col-md-6 contact-info">
                                <i className="fas fa-paper-plane"></i> <br />
                                <a href={`mailto:${data.email}`}>{data.email}</a><br />
                                <span>email</span>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 contact-info">
                                <i className="fas fa-map-marker-alt"></i><br />
                                <div dangerouslySetInnerHTML={{
                                    __html : data.address
                                }}>
                                    
                                </div>
                                <span>address</span>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12 contact-info">
                                <i className="fas fa-phone"></i><br />
                                <a href={`tel:${data.phone_url}`}>{data.phone}</a><br />
                                <span>phone</span>
                            </div>
                        </div>
                    </div>
                    <div className="map box-animate">
                        <iframe src={data.gmap} style={{border: 'none'}}></iframe>
                    </div>
                </>

            ) : null}

        </>

    )
}

function mapStateToProps(state) {   

    return {
        currentArticle : state.articlesReducer.currentArticle
    }
  
  }
  
  function mapDispatchToProps(dispatch) {
  
    return {}

  }


export default connect(mapStateToProps, mapDispatchToProps)(ContactPageMain);

