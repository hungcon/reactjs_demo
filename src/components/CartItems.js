import React from 'react';
import '../styles/css/cart-items.css'

export default function CartItems() {
    const cartItems = [
        {
            id: 1,
            image: 'http://localhost:3000/src/images/item.png',
            name: 'Son Whoo Luxury Lip Rouge mini',
            price: '350.000đ',
            quantity: '2',
        },
        {
            id: 2,
            image: 'http://localhost:3000/src/images/item.png',
            name: 'Son Whoo Luxury Lip Rouge mini',
            price: '350.000đ',
            quantity: '2',
        }
    ];
    return (
        <div className="header__cart-have-item">
            <div className="header__cart-title">
                Sản phẩm đã thêm
            </div>
            <ul className="header__cart-list-items">
                {
                    cartItems.map(item => {
                        return (
                            <li className="header__cart-item" key={item.id}>
                                <img className="header__cart-item-img" src={item.image} alt="" />
                                <div className="header__cart-wrap">
                                    <div className="header__cart-item-info-wrap">
                                    <div className="header__cart-item-name"> 
                                        {item.name}
                                    </div>
                                    <div className="header__cart-item-info">
                                        <div className="header__cart-item-price"> 
                                            {item.price}
                                        </div>
                                        <div className="header__cart-item-multiple"> x </div>
                                        <div className="header__cart-item-quantity">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="header__cart-item-action">
                                    <div className="header__cart-item-action--delete">Xoá</div>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="header__cart-info">
                <div className="header__cart-info-total">
                    <div className="header__cart-info-title">Tổng tiền: </div>
                    <div className="header__cart-info-value"> 700.000đ</div>
                </div>
                <div className="header__cart-info-bonus">
                    <div className="header__cart-info-title">Ví tích điểm: </div>
                    <div className="header__cart-info-value"> +700 điểm</div>
                </div>
            </div>
            <div className="button-watch">
                <div className="btn btn--primary btn__cart-info">Xem giỏ hàng</div>
            </div>
        </div>
    );
};