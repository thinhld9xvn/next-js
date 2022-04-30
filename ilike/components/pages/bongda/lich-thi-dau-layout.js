import React from 'preact/compat'
import Link from 'next/link'
export default function LichThiDauLayout() {
    return (
        <main id="main">
            <section className="banner__global">
                <div className="container">
                    <h1 className="title__banner">
                        Thể thao
                    </h1>
                    <div className="banner__group">
                        <ul>
                            <li className="active"><Link href="/bong-da.html"><a title="bóng đá">bóng đá</a></Link></li>
                            <li><a href="#" title="bóng rổ">bóng rổ</a></li>
                            <li><a href="#" title="tennis">tennis</a></li>
                            <li><a href="#" title="môn khác">môn khác</a></li>
                            <li><a href="#" title="góc dặc biệt">góc dặc biệt</a></li>
                        </ul>
                        <a href="#" className="btn btn__monitor btn--yellow">
                            Theo dõi
                        </a>
                    </div>
                    <div className="banner__group">
                        <ul>
                            <li><a href="#" title="Anh">anh</a></li>
                            <li><a href="#" title="Tây ban nha">Tây ban nha</a></li>
                            <li><a href="#" title="italia">italia</a></li>
                            <li><a href="#" title="Đức">Đức</a></li>
                            <li><a href="#" title="Pháp">Pháp</a></li>
                            <li><a href="#" title="Việt nam">Việt nam</a></li>
                            <li><Link href="/bong-da.html"><a title="Bảng xếp hạng">Bảng xếp hạng</a></Link></li>
                            <li className="active"><Link href="/lich-thi-dau.html"><a title="Lịch thi đấu">Lịch thi đấu</a></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="page-football">
                <div className="container">
                    <div className="football">
                        <div className="module__header">
                            <h2 className="title__football">
                                Lịch thi đấu bóng đá
                            </h2>
                            <select className="select__nh" name="" id="">
                                <option value="">
                                    Ngoại Hạng Anh
                                </option>
                            </select>
                            <select name="" id="">
                                <option value="">
                                    Vòng 1
                                </option>
                            </select>
                        </div>
                        <div className="module__content">
                            <div className="calendar">
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                                <div className="calendar__item">
                                    <div className="calendar__content">
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                        <div className="calendar__team">
                                            <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                            <span className="calendar__name">
                                                Câu lạc bộ
                                            </span>
                                            <span className="calendar__number">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <time className="calendar__time">
                                        <span>
                                            14/08/21
                                        </span>
                                        <span>
                                            18:30
                                        </span>
                                    </time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}
