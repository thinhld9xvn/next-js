import React from 'preact/compat'
import Link from 'next/link'
import Helmet from 'react-helmet'
import Head from 'next/head'

import MainMenu from './header/main-menu'
import MobileMenu from './header/mobile-menu'
import { connect } from 'react-redux';

function Header({ data }) {

    const {logo, menu} = data;

    return (

        <>
            
            <Helmet bodyAttributes={{
                        class: 'darkness'
                    }} />

            <header className="classic-header">
                <div className="header-container">
                    <Link href={logo.url}>
                        <a className="logo">
                            <img src={logo.src}                                   
                                    alt="logo"
                                    width="90"
                                    height="35"
                                    loading="lazy" /> 
                        </a>
                    </Link>

                    <MainMenu data = {menu} />

                </div>

                <MobileMenu data = {menu} />

            </header>

        </>
        
    )
}

function mapStateToProps(state) {   

    return {}
  
  }
  
function mapDispatchToProps(dispatch) {

    return {}

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);