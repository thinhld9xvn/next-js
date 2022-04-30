import React from 'preact/compat'
import TemplateColumn from './template-column';
export default function TemplateSection({ data }) {
    const arrColumnData = [];
    data.map(item => {
        const {title, icon, thumbnail, galleries } = item;
        const myData = {
            title, 
            icon,
            thumbnail,
            galleries
        }
        arrColumnData.push(<TemplateColumn data = {myData} />);
    });
    return (
        <div className="section section-12 fp-section fp-table active fp-completely">
            <div className="fp-tableCell">
                <div className="vk-lg-flex no-gutters">
                    {arrColumnData}
                </div>
            </div>
        </div>
    )
}
