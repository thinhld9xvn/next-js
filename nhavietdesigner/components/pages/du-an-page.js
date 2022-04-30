import React, {useEffect, useState} from 'preact/compat'
import Link from 'next/link'

function getTempItem(item) {

    const {title, url, description, background, extras} = item;
    const {url : backgroundUrl} = background;

    if ( title.toLowerCase() === 'sản phẩm') return;

    return (
        <div className="col-lg-6 col-sm-12 _item">

            <div className="vk-project-item vk-project-item--style-2">

                <Link href={url}>

                    <a className="vk-project-item__img"> 

                        <img src={backgroundUrl}
                                alt="background"
                                loading="lazy" /> 

                    </a>

                </Link>

                <div className="vk-project-item__brief">
                    
                    <h3 className="vk-project-item__title">

                        <Link href={url}>

                            <a title={title}>
                                {title}
                            </a>

                        </Link>

                    </h3>
                    
                    <div className="vk-project-item__text"
                        dangerouslySetInnerHTML={{
                            __html : description
                        }}>
                        
                    </div>
                    
                    <div className="vk-project-item__button">

                        <Link href={url}>

                            <a className="vk-project-item__btn">
                                Chi tiết 
                                <i className="_icon fa fa-arrow-right"></i>
                            </a>
                            
                        </Link>

                    </div>

                </div>

                <Link href={url}>
                    <a className="vk-project-item__link"></a>
                </Link>

            </div>

        </div>
    )

}

export default function DuanPage({ data }) {   

    const arrSectionData = [];

    const {options} = data;

    options.map(item => {

        arrSectionData.push(getTempItem(item));

    });

    return (
        <>
            <section id="main" 
                    className="vk-content">

                <div className="vk-project__content">

                    <div className="vk-project__container">

                        <div className="row vk-project__list">

                            {arrSectionData}

                        </div>

                    </div>

                </div>
            
            </section>

        </>

    )
}
