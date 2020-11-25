import React from 'react';
import Category from './Category';
import Footer from './Footer';
import Header from './Header';

export default function SignOut() {
    return (
        <div className="app">
          <Header />
        <div className="container">
          <div className="grid">
            <div className="grid__row">
              <div className="grid__col-2">
                <Category />
              </div>
              <div className="grid__col-10">
                <div className="content">
                  <div className="content__heading">
                    <span className="content__heading-title">Sắp xếp theo</span>
                    <button className="btn btn-popular">Phổ biến</button>
                    <button className="btn btn-newest btn--selected">Mới nhất</button>
                    <button className="btn btn-best-seller">Bán chạy</button>
                    <div className="content__option-sort">
                      Giá
                      <span>
                        <svg viewBox="0 0 10 6" className="shopee-svg-icon icon-arrow-down-small">
                          <path d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z" fillRule="nonzero" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="content__list-products">
                    <div className="grid__row">
                      {/* List product */}
                      <div className="grid__col-2-4">
                        <div className="product-item">
                          <div className="product-img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/1db7f40ec73c55032db617d8287414fd_tn)'}}>
                          </div>
                          <div className="product-name">Nhiệt kế hồng ngoại cầm tay đo trán không tiếp xúc
                            độ chính xác cao trong 1 giây</div>
                          <div className="product-price-wrap">
                            <div className="product-price">230.000đ</div>
                            <div className="product__car-icon">
                              <svg height={12} viewBox="0 0 20 12" width={20} className="shopee-svg-icon icon-free-shipping">
                                <g fill="none" fillRule="evenodd" transform>
                                  <rect fill="#00bfa5" fillRule="evenodd" height={9} rx={1} width={12} x={4} />
                                  <rect height={8} rx={1} stroke="#00bfa5" width={11} x="4.5" y=".5" />
                                  <rect fill="#00bfa5" fillRule="evenodd" height={7} rx={1} width={7} x={13} y={2} />
                                  <rect height={6} rx={1} stroke="#00bfa5" width={6} x="13.5" y="2.5" />
                                  <circle cx={8} cy={10} fill="#00bfa5" r={2} />
                                  <circle cx={15} cy={10} fill="#00bfa5" r={2} />
                                  <path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff" />
                                  <path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5" />
                                  <path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5" />
                                  <circle cx={8} cy={10} fill="#047565" r={1} />
                                  <circle cx={15} cy={10} fill="#047565" r={1} />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="product-rating">
                            <div className="product__heart-icon">
                              <svg height={16} viewBox="0 0 16 16" width={16} version="1.1">
                                <path d="m7.251221 4.2145388c-.549143-.4552525-1.2488781-.7145388-1.951221-.7145388-1.5719593 0-2.8 1.2269253-2.8 2.7970027 0 .5878515.158291 1.1598348.483492 1.7618948.6414654 1.1875754 1.5644044 2.1358244 4.4829309 4.7799304l.5348542.4864596.5326254-.4807607c2.9306205-2.660747 3.8471674-3.6039919 4.486777-4.7931984.3223805-.5993922.4793205-1.1689848.4793205-1.7543257 0-1.5700774-1.2280407-2.7970027-2.8-2.7970027-.7029148 0-1.4032175.2597087-1.9497845.7133288l-.0367779.0309601c-.1203966.1029087-.2318185.2143106-.3329071.3329122l-.3805305.4464557-.3805305-.4464557c-.1010886-.1186016-.2125105-.2300035-.3301434-.3305672z" fill="none" stroke="#000" strokeOpacity=".54" />
                              </svg>
                            </div>
                            <div className="product__rating-stars">
                              <div className="product__star-wrap">
                                <div className="product__star">
                                  <svg className="product__star-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="product__star">
                                  <svg className="product__star-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="product__star">
                                  <svg className="product__star-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="product__star">
                                  <svg className="product__star-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                                <div className="product__star">
                                  <svg className="product__star-icon" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0}>
                                    <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="product__sold-number">
                              Đã bán: 4,8k
                            </div>
                          </div>
                          <div className="product__type">
                            <div className="product__type-text">
                              Quốc tế
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content__footer">
                    <button className="btn-page-number btn--left">
                      <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-left">
                        <g>
                          <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
                          </path>
                        </g>
                      </svg>
                    </button>
                    <button className="btn-page-number page-active">1</button>
                    <button className="btn-page-number">2</button>
                    <button className="btn-page-number">3</button>
                    <button className="btn-page-number">4</button>
                    <button className="btn-page-number">5</button>
                    <button className="btn-page-number btn-non-click">...</button>
                    <button className="btn-page-number btn--right">
                      <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-right">
                        <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    );
};