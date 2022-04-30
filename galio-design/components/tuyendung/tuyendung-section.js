import React from 'preact/compat'
import Link from 'next/link'
import TuyenDungArticles from './tuyendung-section/tuyendung-articles';
export default function TuyenDungSection({ data }) {
    const {getRecruitmentMetaPage} = data;
    const {heading, introduction, button_text, button_url, posts} = getRecruitmentMetaPage;
    return (
        <section className="page__recruit">
            <h1 className="bg-title">Career</h1>
            <div className="container__recruit">
                <div className="introduce-group">
                    <h2 className="title_global" data-split-letters="1000">
                        {heading}
                    </h2>
                    <div className="desc__global"
                         dangerouslySetInnerHTML={{
                             __html : introduction
                         }}>                        
                    </div>
                    <Link href={button_url}>
                        <button className="button" data-button="1300">
                            <span className="button__text">
                               {button_text}
                            </span>
                            <svg className="button__svg" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect className="button__shape" height="100%" width="100%"></rect>
                            </svg>
                        </button>
                    </Link>
                </div>
                <TuyenDungArticles data = {posts} />
            </div>
        </section>
    )
}
