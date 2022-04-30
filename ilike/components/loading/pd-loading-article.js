import React from 'preact/compat'
import styles from './styles/pdLoading.module.css';

export default function PdLoadingArticle({ layout = 'grid', 
                                                showthumbnail = true, 
                                                    thumbnail = 'small',
                                                        thumbnailpos = 'left',
                                                        fluidrow = false }) {
    
    if ( thumbnailpos === 'top' || thumbnailpos === 'bottom' || !showthumbnail ) {
        layout = 'block';
    }
    
    return (

        <div className={`${styles.pdLoadingList} pd-loading-articles`}>

            <div className={`${styles[`pdLoadingList__${layout}`]}
                                ${showthumbnail ? (fluidrow ? styles[`pdLoadingList__grid__fluid_row_thumbnail`] : 
                                        styles[`pdLoadingList__${layout}__thumbnail_${thumbnailpos}`]) : ''}`}>

                {showthumbnail ? (

                    <div className={`${styles.pdLoadingElement} 
                                        ${styles[`pdLoadingElement__${thumbnail}`]} 
                                        ${styles[`pdThumbnailPos__${thumbnailpos}`]}
                                            pd-loading pd-thumbnail`}></div>

                ) : null}

                <div className={`pd-loading pd-contents 
                                    ${styles[`pdContentsPos__${thumbnailpos}`]}
                                    ${styles[`pdContents__${layout}`]}`}>

                    <div className={`${styles.pdLoadingElement} 
                                        ${styles.pdContentElement} 
                                            ${styles.pdHeading}`}></div>

                    <div className={`${styles.pdLoadingElement} 
                                        ${styles.pdContentElement} 
                                            ${styles.pdMeta}`}></div>

                    <div className={`${styles.pdLoadingElement}     
                                        ${styles.pdContentElement} 
                                            ${styles.pdExcerpt}`}></div>

                </div>

            </div>

        </div>

    )
}
