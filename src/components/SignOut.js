import React from 'react';
import QRCodeImg from '../images/qr_code.png';

export default function SignOut() {
    return (
        <div className="app">
        <header className="header">
          <div className="grid">
            {/* Navbar  */}
            <nav className="header__navbar">
              <ul className="header__navbar-list">
                <li className="header__navbar-item  header__navbar-item--has-qr header__navbar-item--separate">
                  Vào cửa hàng trên ứng dụng F8 - Shop
                  <div className="header__qr">
                    <img src={QRCodeImg} alt="QR Code" className="header__qr-img" />
                    <div className="header__qr-apps">
                      <a href className="header__qr_apps-item">
                        <img src="../images/google_play.png" alt="Google Play" className="header__qr-apps-img" />
                      </a>
                      <a href className="header__qr_apps-item">
                        <img src="../images/app_store.png" alt="App Store" className="header__qr-apps-img" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="header__navbar-item">
                  Kết nối
                  <a href className="header__navbar-item--link">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href className="header__navbar-item--link">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
              <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--has-notification">
                  <a href className="header__navbar-item-link">
                  </a><a href className="header__navbar-item--link">
                    <i className="fas fa-bell" />
                  </a>
                  Thông báo
                  <div className="header__notification">
                    <header className="header_notification--title">
                      <h3>Thông báo mới nhận</h3>
                    </header>
                    <ul className="header__notification--list">
                      <li className="header__notification--item">
                        <a href className="header__notification--link">
                          <img src="../images/thong-bao.png" alt="" className="header__notification--img" />
                          <div className="header__notification--info">
                            <p className="header__notification--name">Đây là thông báo</p>
                            <p className="header__notification--description">Đây là mô tả thông báo</p>
                          </div>
                        </a>
                      </li>
                      <li className="header__notification--item">
                        <a href className="header__notification--link">
                          <img src="../images/thong-bao.png" alt="" className="header__notification--img" />
                          <div className="header__notification--info">
                            <p className="header__notification--name">Đây là thông báo</p>
                            <p className="header__notification--description">Đây là mô tả thông báo</p>
                          </div>
                        </a>
                      </li>
                      <li className="header__notification--item">
                        <a href className="header__notification--link">
                          <img src="../images/thong-bao.png" alt="" className="header__notification--img" />
                          <div className="header__notification--info">
                            <p className="header__notification--name">Đây là thông báo</p>
                            <p className="header__notification--description">Đây là mô tả thông báo</p>
                          </div>
                        </a>
                      </li>
                      <li className="header__notification--item">
                        <a href className="header__notification--link">
                          <img src="../images/thong-bao.png" alt="" className="header__notification--img" />
                          <div className="header__notification--info">
                            <p className="header__notification--name">Đây là thông báo</p>
                            <p className="header__notification--description">Đây là mô tả thông báo</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <footer className="header__footer">
                      <a href className="header__footer-text">Xem tất cả</a>
                    </footer>
                  </div>
                </li>
                <li className="header__navbar-item">
                  <a href className="header__navbar-item-link">
                  </a><a href className="header__navbar-item--link">
                    <i className="far fa-question-circle" />
                  </a>
                  Trợ giúp
                </li>
                <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate">
                  Đăng ký
                </li>
                <li className="header__navbar-item header__navbar-item--strong">
                  Đăng nhập
                </li>
              </ul>
            </nav>
            {/* Search  */}
            <div className="header__search">
              <div className="header__search-logo">
                <a href className="header__search-logo--link">
                  <svg viewBox="0 0 192 65" className="shopee-svg-icon header-with-search__shopee-logo icon-shopee-logo">
                    <g fillRule="evenodd">
                      <path d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459">
                      </path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="header__input-wrap">
                <div className="header__input">
                  <input type="text" className="header__input-text" placeholder="Tìm kiếm..." />
                  <div className="header__search-history">
                    <div className="header__history-title">
                      <p className="header__history-title-text">Lịch sử tìm kiếm</p>
                    </div>
                    <ul className="header__history-history">
                      <li className="header__history-item">
                        Áo ba nỗ
                      </li>
                      <li className="header__history-item">
                        Quần dài
                      </li>
                      <li className="header__history-item">
                        Bra
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header__input-select">
                  <div className="header__input-select__text">
                    <span className="header__input-select-label">Trong shop</span>
                    <i className="header__input-select-icon fas fa-angle-down" />
                  </div>
                  <ul className="header__input-option">
                    <li className="header__input-item ">
                      Trong shop
                      <i className="header__input-icon fas fa-check" />
                    </li>
                    <li className="header__input-item header__input-item--active">
                      Ngoài shop
                      <i className="header__input-icon fas fa-check" />
                    </li>
                  </ul>
                </div>
                <button className="header__search-btn">
                  <i className="header__search-btn-icon fas fa-search" />
                </button>
              </div>
              <div className="header__search-cart">
                <div className="header__cart-wrap">
                  <i className="header__cart-icon fas fa-shopping-cart" />
                  {/* Have no item: header__cart-no-item */}
                  <div className="header__cart-items">
                    <div className="header__cart-no-item">
                      <img src="../images/no-cart.png" alt="" className="header__cart-img-no-item" />
                      <div className="header__cart-text-no-item">
                        Chưa có sản phẩm
                      </div>
                    </div>
                    <div className="header__cart-have-item">
                      <div className="header__cart-title">
                        Sản phẩm đã thêm
                      </div>
                      <ul className="header__cart-list-items">
                        <li className="header__cart-item">
                          <img className="header__cart-item-img" src="../images/item.png" alt="" />
                          <div className="header__cart-wrap">
                            <div className="header__cart-item-info-wrap">
                              <div className="header__cart-item-name"> Son Whoo Luxury Lip Rouge mini
                              </div>
                              <div className="header__cart-item-info">
                                <div className="header__cart-item-price"> 350.000đ </div>
                                <div className="header__cart-item-multiple"> x </div>
                                <div className="header__cart-item-quantity"> 2</div>
                              </div>
                            </div>
                            <div className="header__cart-item-action">
                              <div className="header__cart-item-action--delete">Xoá</div>
                            </div>
                          </div>
                        </li>
                        <li className="header__cart-item">
                          <img className="header__cart-item-img" src="../images/item.png" alt="" />
                          <div className="header__cart-wrap">
                            <div className="header__cart-item-info-wrap">
                              <div className="header__cart-item-name"> Son Whoo Luxury Lip Rouge mini
                              </div>
                              <div className="header__cart-item-info">
                                <div className="header__cart-item-price"> 350.000đ </div>
                                <div className="header__cart-item-multiple"> x </div>
                                <div className="header__cart-item-quantity"> 2</div>
                              </div>
                            </div>
                            <div className="header__cart-item-action">
                              <div className="header__cart-item-action--delete">Xoá</div>
                            </div>
                          </div>
                        </li>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="grid">
            <div className="grid__row">
              <div className="grid__col-2">
                <nav className="category">
                  <div className="category__heading">
                    <i className="category__heading-icon fas fa-list" />
                    <span className="category__heading-text">Danh mục</span>
                  </div>
                  <ul className="category__list">
                    <li className="category__item">
                      Trang điểm mắt
                    </li>
                    <li className="category__item category__item--active">
                      Trang điểm môi
                    </li>
                    <li className="category__item">
                      Trang điểm mũi
                    </li>
                    <li className="category__item">
                      Trang điểm đít
                    </li>
                  </ul>
                </nav>
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
        <footer className="footer">
          <div className="footer_heading" />
          <div className="footer__content">
            <div className="footer__content-1">
              <div className="footer__content-heading">
                Chăm sóc khách hàng
              </div>
              <ul className="footer__content-list-items">
                <li className="footer__content-item">
                  Trung tâm trợ giúp
                </li>
                <li className="footer__content-item">
                  Shopee Blog
                </li>
                <li className="footer__content-item">
                  Shopee Mall
                </li>
                <li className="footer__content-item">
                  Hướng dẫn mua hàng
                </li>
                <li className="footer__content-item">
                  Hướng dẫn bán hàng
                </li>
                <li className="footer__content-item">
                  Thanh toán
                </li>
                <li className="footer__content-item">
                  Shopee Xu
                </li>
                <li className="footer__content-item">
                  Vận chuyển
                </li>
                <li className="footer__content-item">
                  Trả hàng &amp; Hoàn tiền
                </li>
                <li className="footer__content-item">
                  Chăm sóc khách hàng
                </li>
                <li className="footer__content-item">
                  Chính sách bảo hành
                </li>
              </ul>
            </div>
            <div className="footer__content-2">
              <div className="footer__content-heading">
                Về shopee
              </div>
              <ul className="footer__content-list-items">
                <li className="footer__content-item">
                  Giới thiệu về Shopee Việt Nam
                </li>
                <li className="footer__content-item">
                  Tuyển dụng
                </li>
                <li className="footer__content-item">
                  Điều khoản Shopee
                </li>
                <li className="footer__content-item">
                  Chính sách bảo mật
                </li>
                <li className="footer__content-item">
                  Chính hãng
                </li>
                <li className="footer__content-item">
                  Kênh người bán
                </li>
                <li className="footer__content-item">
                  Flash sales
                </li>
                <li className="footer__content-item">
                  Chương trình Tiếp thị liên kết Shopee
                </li>
                <li className="footer__content-item">
                  Liên Hệ Với Truyền Thông
                </li>
              </ul>
            </div>
            <div className="footer__content-2">
              <div className="footer__content-heading">
                Về shopee
              </div>
              <ul className="footer__content-list-items">
                <li className="footer__content-item">
                  Giới thiệu về Shopee Việt Nam
                </li>
                <li className="footer__content-item">
                  Tuyển dụng
                </li>
                <li className="footer__content-item">
                  Điều khoản Shopee
                </li>
                <li className="footer__content-item">
                  Chính sách bảo mật
                </li>
                <li className="footer__content-item">
                  Chính hãng
                </li>
                <li className="footer__content-item">
                  Kênh người bán
                </li>
                <li className="footer__content-item">
                  Flash sales
                </li>
                <li className="footer__content-item">
                  Chương trình Tiếp thị liên kết Shopee
                </li>
                <li className="footer__content-item">
                  Liên Hệ Với Truyền Thông
                </li>
              </ul>
            </div>
            <div className="footer__content-2">
              <div className="footer__content-heading">
                Về shopee
              </div>
              <ul className="footer__content-list-items">
                <li className="footer__content-item">
                  Giới thiệu về Shopee Việt Nam
                </li>
                <li className="footer__content-item">
                  Tuyển dụng
                </li>
                <li className="footer__content-item">
                  Điều khoản Shopee
                </li>
                <li className="footer__content-item">
                  Chính sách bảo mật
                </li>
                <li className="footer__content-item">
                  Chính hãng
                </li>
                <li className="footer__content-item">
                  Kênh người bán
                </li>
                <li className="footer__content-item">
                  Flash sales
                </li>
                <li className="footer__content-item">
                  Chương trình Tiếp thị liên kết Shopee
                </li>
                <li className="footer__content-item">
                  Liên Hệ Với Truyền Thông
                </li>
              </ul>
            </div>
            <div className="footer__content-2">
              <div className="footer__content-heading">
                Về shopee
              </div>
              <ul className="footer__content-list-items">
                <li className="footer__content-item">
                  Giới thiệu về Shopee Việt Nam
                </li>
                <li className="footer__content-item">
                  Tuyển dụng
                </li>
                <li className="footer__content-item">
                  Điều khoản Shopee
                </li>
                <li className="footer__content-item">
                  Chính sách bảo mật
                </li>
                <li className="footer__content-item">
                  Chính hãng
                </li>
                <li className="footer__content-item">
                  Kênh người bán
                </li>
                <li className="footer__content-item">
                  Flash sales
                </li>
                <li className="footer__content-item">
                  Chương trình Tiếp thị liên kết Shopee
                </li>
                <li className="footer__content-item">
                  Liên Hệ Với Truyền Thông
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
};