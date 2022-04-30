import React from 'preact/compat'
export default function AddToCartModal() {
    return (
        <div id="popup-marker" className="flex cqj-dialog align-center justify-center popup">
            <div className="modal">
                <a href="#" className="close"></a>
                <div className="modal-main flex align-center justify-center flex-direction-column">
                    <img src="/static/images/cart-bg.png" alt="" />
                    <h2>Đặt hàng thành công !</h2>
                    <p className="mtop20">Chúng tôi sẽ liên hệ với quý khách ngay, cảm ơn quý khách đã mua hàng!</p>
                </div>
            </div>
        </div>
    )
}
