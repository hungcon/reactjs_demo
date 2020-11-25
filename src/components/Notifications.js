import React from 'react';
import '../styles/css/notifications.css';

export default function Notifications() {
    const notifications = [
        {
            id: 1,
            image: 'http://localhost:3000/src/images/thong-bao.png',
            name: 'Day Shield Perfect Sun - Cho nàng thơ tự tin "tỏa nắng"',
            description: ''
        },
        {
            id: 2,
            image: 'http://localhost:3000/src/images/thong-bao-2.png',
            name: 'Tặng ngay combo 5 gói mặt nạ thải độc Su:m37',
            description: 'Khuyến mại siêu hot:'
        }
    ];
    return (
        <ul className="header__notification--list">
            {
                notifications.map(item => {
                    return (
                        <li className="header__notification--item" key={item.id}>
                            <a href className="header__notification--link">
                                <img src={item.image} alt="" className="header__notification--img" />
                                <div className="header__notification--info">
                                    <p className="header__notification--name">{item.name}</p>
                                    <p className="header__notification--description">{item.description}</p>
                                </div>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};