import { onClick_addToCartEvent, onClick_buyCartEvent } from '@js_dir/utils/shoppingCartsUtils';
import React from 'preact/compat'
export default function DetailsIntro({ data, messages, props }) {
    const {title, status, brands, places, short_description, hotline} = data;
    const {cartsList, UpdateCartsList} = props;
    return (
        <div className="pdetail-r">
            <h1 className="s30 pdetail-tit">{title}</h1>
            <div className="pdetail-info">
                <div className="pdetail-shortdesc text-justify" dangerouslySetInnerHTML={{
                    __html : short_description
                }}>
                </div>
                <p><strong>{messages['status_label']}:</strong> {status}</p>
                <p><strong>{messages['brands_label']}:</strong> Mác thép</p>
                <p><strong>{messages['places_label']}:</strong> Nhập khẩu</p>
            </div>
            <div className="pdetail-contact">
                <div className="pdetail-carts-action flex flex-spacing-row">
                    <a href="#" 
                        className="btnSingleCart"
                        onClick={e => onClick_addToCartEvent({
                            product : data,
                            carts : cartsList,
                            updateCartsAction : UpdateCartsList,
                            messages
                        }, e)}>
                        <img src="/static/images/shopping-bag-blue.png" alt="" />
                        <span className="padleft10">{messages['add_to_cart_label']}</span>
                    </a>
                    <a href="#" 
                        className="btnSingleCart __buy __painted"
                        onClick={e => onClick_buyCartEvent({
                            product : data,
                            carts : cartsList,
                            updateCartsAction : UpdateCartsList,
                            messages
                        }, e)}>
                        <span className="">{messages['buy_now_label']}</span>
                    </a>
                </div>
            </div>
            <div className="pdetail-contact __noborder flex justify-space-between align-center flex-spacing-row">
                <div className="social flex align-center">
                    <label>Share: </label>
                    <div className="soclists social-ft social-single flex align-center">
                        <a href="#" className="fb">
                            <span className="fa fa-facebook"></span>
                        </a>
                        <a href="#" className="tw">
                            <span className="fa fa-twitter"></span>
                        </a>
                        <a href="#" className="gplus">
                            <span className="fa fa-google-plus"></span>
                        </a>
                        <a href="#" className="youtube">
                            <span className="fa fa-youtube-play"></span>
                        </a>
                    </div>
                </div>
                <div className="hotline pdetail-hotline">Hotline: {hotline}</div>
            </div>
        </div>
    )
}
