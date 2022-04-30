import React from 'preact/compat'
import styles from './styles/pdLoading.square.module.css';

export default function PdLoadingSquare({size = "large"}) {
    return (
        <div className={styles.pdLoadingList}>

            <div className={`${styles.pdLoadingElement} ${styles[`pdLoadingElement__${size}`]}`}>
                
            </div>
            
        </div>
    )
}
