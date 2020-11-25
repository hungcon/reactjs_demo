import React from 'react';

export default function Category() {
    const categories = [
        {
            id: 1,
            name: 'Trang điểm mắt'
        },
        {
            id: 2,
            name: 'Trang điểm môi'
        },
        {
            id: 3,
            name: 'Trang điểm mũi'
        },
    ];
    return (
        <nav className="category">
            <div className="category__heading">
                <i className="category__heading-icon fas fa-list" />
                <span className="category__heading-text">Danh mục</span>
            </div>
            <ul className="category__list">
                {
                    categories.map(item => {
                        return (
                            <li className="category__item">
                                { item.name }
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};