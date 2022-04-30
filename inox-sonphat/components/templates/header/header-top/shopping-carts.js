import React, {useEffect, useState} from 'preact/compat'
import Link from 'next/link'
import { isValidateArray } from '@js_dir/utils/arrayUtils';
import { calcTotalPrices, onClick_removeCartEvent } from '@js_dir/utils/shoppingCartsUtils';
import { getPageUrlByLocale } from '@js_dir/utils/urlUtils';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import router, { useRouter } from 'next/router';
function getTempCartItem(data) {
    const { item, carts, updateCartsAction, messages, locale } = data;
    const {id, thumbnails, url, price, text, count, polylang_post, locale: productLocale} = item;
    const {id: localeItemId, thumbnails: localeItemThumbnails, url : localeItemUrl, price: localeItemPrice, text : localeItemText} = polylang_post;
    const {url : thumbnail} = thumbnails[1];
    const {url : localeItemThumbnail} = localeItemThumbnails[1];
    const productUrl = locale === productLocale ? url : localeItemUrl;
    const productThumbnail = locale === productLocale ? thumbnail : localeItemThumbnail;
    const productText = locale === productLocale ? text : localeItemText;
    return (
        <li className="grid grid-span50 grid-no-column-gap grid-no-row-gap">
            <div className="thumbnail">
                <Link href={productUrl}>
                    <img src={productThumbnail} loading="lazy" alt="product" />
                </Link>
            </div>    
            <h4 className="cart-title padleft10 flex flex-direction-column">
                <Link href={productUrl}>{productText}</Link>
                <span>{count} x {price[0].format}</span>
            </h4>
            <a className="btnRemoveCartItem" 
                href="#"
                onClick={e => onClick_removeCartEvent({
                                                        id,
                                                        carts,
                                                        updateCartsAction,
                                                        messages
                                                      }, e)}></a>
        </li>
    )
}
function ShoppingCarts({cartsList, UpdateCartsList, intl}) {
    const [show, setShow] = useState(false);
    const {locale} = useRouter();
    const {messages} = intl;
    const cartsData = [],
         checkoutData = [];
    if ( isValidateArray(cartsList) ) {
        cartsList.map((cart, i) => {
            cartsData.push(getTempCartItem({
                                                item : cart,
                                                carts : cartsList,
                                                updateCartsAction : UpdateCartsList,
                                                messages,
                                                locale
                                            }));
        });
        const totalPrices = calcTotalPrices(cartsList);
        checkoutData.push(
            <div className="mtop20">
                <div className="carts-crishna-total flex justify-space-between">
                    <span>{messages['total_label']}:</span>
                    <span className="carts-tt-price">{totalPrices.format.total}</span>
                </div>
                <div className="carts-crishna-total flex justify-space-between mtop10">
                    <Link href={getPageUrlByLocale('carts', locale)}>
                        <a className="btnSingleCart __painted __sticky">
                            <span className="">{messages['carts_label']}</span>
                        </a>
                    </Link>
                    <Link href={getPageUrlByLocale('checkout', locale)}>
                        <a className="btn btn-default">{messages['checkout_label']}</a>
                    </Link>
                </div>
            </div>
        );
    }
    const responsiveShoppingCartsList = () => {
        const cartsListAll = document.querySelectorAll('.cartsListDropDown');
        cartsListAll.forEach(cartsList => {
            cartsList.removeAttribute('style');
            const cartsListWidth = cartsList.clientWidth;
            let left = cartsList.previousSibling.getClientRects()[0].left;
            if ( window.innerWidth < 992 && left + cartsListWidth > window.innerWidth ) {
                left = window.innerWidth - cartsListWidth;
            }
            else {
                left = left - cartsListWidth + 37;
            }
            cartsList.style.left = left + 'px';
        });
    }
    const handleShowDropDownLists = (e) => {
        e.preventDefault();
        setShow(true);
    }
    const handleHideDropDownLists = (e) => {
        e.preventDefault();
        setShow(false);
    }
    useEffect(() => {
        setTimeout(function() {
            responsiveShoppingCartsList();
            window.addEventListener('resize', responsiveShoppingCartsList);
        }, 200);
        return () => {
            window.removeEventListener('resize', responsiveShoppingCartsList);
        }
    }, []);
    return (
        <>
            <div className="header-carts"
                 onMouseMove={handleShowDropDownLists}
                 onMouseLeave={handleHideDropDownLists}>
                <Link href={getPageUrlByLocale('carts', router.locale)}>
                    <a className="shoppingcart">
                        <img src="/static/images/shopping-bag.png" alt="" />
                    </a>
                </Link>
                <span className="count">{isValidateArray(cartsData) ? cartsData.length : 0}</span>
            </div>
            <div className={"cartsListDropDown ".concat(show ? 'show' : '')}
                 onMouseMove={handleShowDropDownLists}
                 onMouseLeave={handleHideDropDownLists}>
                <div className="wrapper">
                    <ul>
                        {isValidateArray(cartsData) ? (
                            cartsData
                        ) : (
                            <li className="empty text-center">
                                {messages['no_products_label']}
                            </li>
                        )}
                    </ul>
                    {checkoutData}
                </div>
            </div>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        cartsList: state.globalReducer.cartsList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateCartsList : async (v) => await dispatch({
            type : "UPDATE_CARTS_LIST",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ShoppingCarts));
