import React from 'preact/compat'
import Link from 'next/link'
export default function BongDaLayout() {
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
                            <li className="active"><Link href="/bong-da.html"><a title="Bảng xếp hạng">Bảng xếp hạng</a></Link></li>
                            <li><Link href="/lich-thi-dau.html"><a title="Lịch thi đấu">Lịch thi đấu</a></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="page-football">
                <div className="container">
                    <div className="football">
                        <div className="module__header">
                            <h2 className="title__football">
                                Bảng xếp hạng
                            </h2>
                            <select name="" id="">
                                <option value="">
                                    Ngoại Hạng Anh
                                </option>
                            </select>
                        </div>
                        <div className="module__content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Bảng xếp hạng bóng đá NHA
                                    </h3>
                                    <select name="" id="">
                                        <option value="">
                                            Mùa 2021-2022
                                        </option>
                                    </select>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Hạng
                                                </th>
                                                <th>
                                                    Câu lạc bộ
                                                </th>
                                                <th>
                                                    ST
                                                </th>
                                                <th>
                                                    T
                                                </th>
                                                <th>
                                                    h
                                                </th>
                                                <th>
                                                    TH
                                                </th>
                                                <th>
                                                    BT
                                                </th>
                                                <th>
                                                    BTH
                                                </th>
                                                <th>
                                                    HS
                                                </th>
                                                <th>
                                                    Đ
                                                </th>
                                                <th>
                                                    Giải nhất
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg__blue">
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__green"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="bg__blue">
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__green"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="bg__yellow">
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__green"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="bg__light--green">
                                                <td>
                                                    4
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__green"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    5
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__yellow"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    6
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__gray"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    7
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    8
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    9
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    10
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    11
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    12
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    13
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    14
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="    ">
                                                <td>
                                                    15
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="bg__light--pink">
                                                <td>
                                                    16
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="bg__light--purple">
                                                <td>
                                                    17
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="bg__light--purple">
                                                <td>
                                                    18
                                                </td>
                                                <td>
                                                    <div className="clb">
                                                        <img src="/static/images/clb.jpg" alt="clb.jpg" />
                                                        <span>
                                                            Câu lạc bộ
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="group">
                                                        <span className="color__pink"> </span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-not">
                                <div className="card-item">
                                    <h3 className="card__title">
                                        Ghi chú
                                    </h3>
                                    <p className="not__text">
                                        <span className="color__blue"></span>
                                        <span className="text">
                                            Vòng bảng UEFA Champions League
                                        </span>
                                    </p>
                                    <p className="not__text">
                                        <span className="color__yellow"></span>
                                        <span className="text">
                                            Vòng loại UEFA Champions League
                                        </span>
                                    </p>

                                    <p className="not__text">
                                        <span className="color__green"></span>
                                        <span className="text">
                                            Vòng bảng Europa League
                                        </span>
                                    </p>
                                    <p className="not__text">
                                        <span className="color__pink"></span>
                                        <span className="text">
                                            Trận play-off trụ hạng
                                        </span>
                                    </p>
                                    <p className="not__text">
                                        <span className="color__purple"></span>
                                        <span className="text">
                                            Xuống hạng
                                        </span>
                                    </p>
                                </div>
                                <div className="card-item">
                                    <h3 className="card__title">
                                        Viết tắt
                                    </h3>
                                    <p className="not__text">
                                        ST: số trận
                                    </p>
                                    <p className="not__text">
                                        T: Thắng
                                    </p>
                                    <p className="not__text">
                                        H: Hòa
                                    </p>
                                    <p className="not__text">
                                        TH: Thua
                                    </p>
                                    <p className="not__text">
                                        BT: Tổng số bàn thắng
                                    </p>
                                    <p className="not__text">
                                        BTH: Tống số bàn thua
                                    </p>
                                    <p className="not__text">
                                        HS: Hiệu số
                                    </p>
                                    <p className="not__text">
                                        Đ: Điểm
                                    </p>
                                </div>
                                <div className="card-item">
                                    <h3 className="card__title">
                                        5 trận gần nhất
                                    </h3>
                                    <p className="not__text">
                                        <span className="color__green"></span>
                                        <span className="text">
                                            Thắng
                                        </span>
                                    </p>
                                    <p className="not__text">
                                        <span className="color__gray"></span>
                                        <span className="text">
                                            Hòa
                                        </span>
                                    </p>

                                    <p className="not__text">
                                        <span className="color__pink"></span>
                                        <span className="text">
                                            Thua
                                        </span>
                                    </p>
                                    <p className="not__text">
                                        <span className="color__white"></span>
                                        <span className="text">
                                            Không chơi
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}
