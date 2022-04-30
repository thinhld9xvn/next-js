import React from 'preact/compat'
import Footer from '@components/footer/footer'

export default function FooterWidget({ data }) {

    return (

        <div className="section fp-auto-height fp-section fp-table active fp-completely">
            <div className="fp-tableCell" >
                <Footer data = {data} />
            </div>
        </div>

    )
}
