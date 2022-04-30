import React, {useState, useEffect} from 'preact/compat'

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import { inCategory } from '@js_dir/utils/categoriesUtils';

var productsListData = [];

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
}

function onClickTabLink(data, e) {

    e.preventDefault();

    const {id, setActiveTabId} = data;

    setActiveTabId(id);
    
} 

function getTempTabItem(data) {

    const { activeTabId, setActiveTabId, item } = data;

    return (
        <li>
            <Nav.Link eventKey={item.term_id}
                        role="tab"
                        className={activeTabId === item.term_id ? 'active' : ''}
                        onClick={e => onClickTabLink({
                                                        id : item.term_id,
                                                        setActiveTabId
                                                    }, e)}>
                {item.name}
            </Nav.Link>
        </li>
    )

}

function getTempTabContentItem(data) {

    const arrProductColumnsData = [];

    const {item, productsList, setActiveProduct, onOpenModal} = data;

    const onChooseProduct = (e, productData) => {

        e.preventDefault();

        setActiveProduct(productData);

        onOpenModal(e);

    }

    const getTempProductItem = (productItem) => {

        const {title, thumbnail} = productItem;

        return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 box">

                <div className="item_pr"
                        onClick={(e) => onChooseProduct(e, productItem)}>

                    <a href="#" 
                        className="img_cate">

                        <img src={thumbnail} alt="thumbnail" loading="lazy" />

                    </a>

                    <h3><a href="#">{title}</a></h3>

                    <span className="caret"></span>

                </div>

            </div>
        )

    }

    productsList.map(item => {

        arrProductColumnsData.push(getTempProductItem(item));

    });
    
    return (
        <Tab.Pane eventKey={item.term_id}>

            <div className="vk-container vk-sm-flex vk-shop-galleries">

                {arrProductColumnsData}
                                
            </div>

        </Tab.Pane>       
    )

}

function NavTab({ data }) {

    const arrTabsList = [];

    const {activeTabId, setActiveTabId, tabsListData} = data;

    tabsListData.map(item => {

        const d = {
            item,
            activeTabId,
            setActiveTabId
        };

        arrTabsList.push(getTempTabItem(d));

    });

    return (
        <ul className="nav nav-tabs" role="tablist">

            {arrTabsList}
                                       
        </ul>
    )

}

function NavContents({ data }) {

    const arrTabContents = [];

    const {tabsListData, setActiveProduct, onOpenModal} = data;

    tabsListData.map(item => {

        const productsList = productsListData.filter(product => inCategory(product, item.term_id, tabsListData));

        arrTabContents.push(getTempTabContentItem({
            item,
            productsList,
            onOpenModal,
            setActiveProduct
        }));

    });
    
    return (
        <Tab.Content>

            {arrTabContents}

        </Tab.Content>
    )

}

function ProductInnerModal({ data }) {

    const arrGalleriesList = [];

    const {title, galleries} = data;

    galleries.map(gallery => {

        const {url} = gallery;

        arrGalleriesList.push(

            <div className="image">
                <img src={url} alt="thumbnail" loading="lazy" />
            </div>

        );

    });    

    return (
        <>

            <h2>{title}</h2>

            <div className="slider slider-carousel">

                <Slider {...settings}>

                    {arrGalleriesList}

                </Slider>
                
            </div>

            <div>
                <a className="vk_more vk_more_mb" href="#">Giá liên hệ</a>
            </div>

        </>

    );

}

export default function ShopPage({ data }) {
    
    const [loading, setLoading] = useState(true);
    const [activeTabId, setActiveTabId] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [categoriesListData, setCategoriesListData] = useState([]);
    const [activeProduct, setActiveProduct] = useState(null);

    const {options} = data;
    const {banners_list, title, description, options : productsList} = options;   
    
    const onOpenModal = (e) => { e.preventDefault(); setOpenModal(true); }
    const onCloseModal = () => setOpenModal(false);
    
    useEffect(() => {

        const arrCategoriesList = [];

        productsList.map(product => {        

            product.categories && 
                product.categories.map(cat => {
    
                    const results = arrCategoriesList.filter(c => parseInt(c.term_id) === parseInt(cat.term_id));
    
                    if ( results.length === 0 ) {
    
                        arrCategoriesList.push(cat);
    
                    }
    
            });
    
        });    
    
        arrCategoriesList.sort((t1, t2) => {
            
            const c1 = parseInt(t1.term_id),
                c2 = parseInt(t2.term_id);
    
            if ( c1 === c2 ) return 0;
    
            return c1 < c2 ? -1 : 1;
    
        });        

        setActiveTabId(arrCategoriesList[0].term_id);

        setCategoriesListData(JSON.parse(JSON.stringify(arrCategoriesList)));

        productsListData = JSON.parse(JSON.stringify(productsList));

        setLoading(false);

    }, []);

    if ( loading ) {
        return <div></div>
    }

    const cfirst = categoriesListData[0];
    const banner = banners_list[0];

    const {url} = banner;
    const {term_id : defaultTabId} = cfirst;

    return (
        <>
            <section id="main" className="vk-content">

                <div className="vk-shop__top">

                    <div className="vk-slider vk-shop__slider">
                        <div className="vk-img">
                            <img src={url} alt="banner" loading="lazy" />
                        </div>
                    </div>

                    <div className="vk-shop__title-box">

                        <div className="_left">
                            <h1 className="vk-shop__title">{title}</h1>
                        </div>

                        <div className="_right">
                            <div className="vk-shop__title-text"
                                dangerouslySetInnerHTML={{
                                    __html : description
                                }}>                            
                            </div>
                        </div>

                    </div>

                </div>

                <div className="vk_tab_content">

                    <Tab.Container id="productsNavTabContainer" 
                                    defaultActiveKey={defaultTabId}>

                        
                        <NavTab data = {{
                            activeTabId,
                            setActiveTabId,
                            tabsListData: categoriesListData
                        }} />

                        <NavContents data = {{
                            tabsListData: categoriesListData,
                            onOpenModal,
                            setActiveProduct
                        }} />                    

                    </Tab.Container>

                </div>
                
            </section>

            <Modal open={openModal} onClose={onCloseModal} center>

                <ProductInnerModal data = {activeProduct} />
                
            </Modal>

        </>

    )
}
