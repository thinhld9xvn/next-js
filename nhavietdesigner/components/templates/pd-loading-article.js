import React from 'preact/compat'
import styles from '@styles/pdLoading.module.css';

export default function PdLoadingArticle({ layout = 'grid' }) {
    return (
        <div className={`${styles.pdLoadingList} pd-loading-articles`}>
            <div className={styles[`pdLoadingList__${layout}`]}>
                <div className={`${styles.pdLoadingElement} pd-loading pd-thumbnail`}></div>
                <div className="pd-loading pd-contents">
                    <div className={`${styles.pdLoadingElement} ${styles.pdContentElement} ${styles.pdHeading}`}></div>
                    <div className={`${styles.pdLoadingElement} ${styles.pdContentElement} ${styles.pdMeta}`}></div>
                    <div className={`${styles.pdLoadingElement} ${styles.pdContentElement} ${styles.pdExcerpt}`}></div>
                </div>
            </div>
        </div>
    )
}
