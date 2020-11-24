import React from 'react';

export default function SignIn() {
    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
            <div className="modal__auth-form">
                <div className="modal__header">
                    <p className="modal__sign-up">Đăng ký</p>
                    <p className="modal__sign-in">Đăng nhập</p>
                </div>
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input type="text" className="auth-form__input" placeholder="Email của bạn" />
                    </div>
                    <div className="auth-form__group">
                        <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
                    </div>
                    <div className="auth-form__group">
                        <input type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu" />
                    </div>
                </div>
                <div className="auth-form__aside">
                    <p className="auth-form__policy-text">
                     Bằng việc đăng ký, bạn đã đồng ý với Shopee về
                    <a href className="auth-form__text-link">Điều khoản và dịch vụ</a> &amp;
                    <a href className="auth-form__text-link">Chính sách bảo mật</a>
                    </p>
                </div>
                <div className="auth-form__control">
                    <button className="btn btn--back">TRỞ LẠI</button>
                    <button className="btn btn--primary">ĐĂNG KÝ</button>
                </div>
            </div>
            <div className="auth-form__socials">
                <a href className="btn--with-icon btn--facebook">
                <i className="fab fa-facebook-square auth-form__social-icon" />
                <span className="auth-form__social-text">Kết nối với Facebook</span>
                </a>
                <a href className="btn--with-icon btn--google">
                <i className="fab fa-google auth-form__social-icon" />
                <span className="auth-form__social-text">Kết nối với Google</span>
                </a>
            </div>
            </div>
      </div>
    );
};