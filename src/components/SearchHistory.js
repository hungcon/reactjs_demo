import React from 'react';
import '../styles/css/search-history.css';

export default function SerchHistory() {
    const searchHistory = [
        {
            id: 1,
            searchTime: 'demo',
            searchContent: 'Áo ba nỗ'
        },
        {
            id: 2,
            searchTime: 'demo',
            searchContent: 'Quần dài'
        },
        {
            id: 3,
            searchTime: 'demo',
            searchContent: 'Bra'
        }
    ];
    return (
            <div className="header__input">
                <input type="text" className="header__input-text" placeholder="Tìm kiếm..." />
                <div className="header__search-history">
                    <div className="header__history-title">
                        <p className="header__history-title-text">Lịch sử tìm kiếm</p>
                    </div>
                    <ul className="header__history-history">
                        {
                            searchHistory.map((item) => {
                                return (
                                        <li className="header__history-item" key={item.id}>
                                            {item.searchContent}
                                        </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
    );
};