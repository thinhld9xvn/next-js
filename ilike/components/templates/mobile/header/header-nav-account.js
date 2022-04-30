import { ACCOUNT_TABS } from '@constants/constants';
import React, {useEffect, useState} from 'preact/compat'
import Link from 'next/link'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
function HeaderNavAccount({props, accountTabActiveId, UpdateAccountTabActiveId}) {
    const router = useRouter();
    const {showAccountMenu, setShowAccountMenu} = props;
    const [tabsListResults, setTabsListResults] = useState(null);
    const handleToggleNavAccount = (e) => {
        e.preventDefault();
        setShowAccountMenu(!showAccountMenu);
    }
    const handleCloseNavAccount = (e) => {
        e.preventDefault();
        setShowAccountMenu(false);
    }
    const handleChooseTab = (id, e) => {
        UpdateAccountTabActiveId(id);
        setShowAccountMenu(false);
    }
    const initTabsLists = () => {
        const arrTabsListResults = [];
        const keys = Object.keys(ACCOUNT_TABS);
        for (let i = 0 ; i < keys.length; i++) {
            const key = keys[i];
            const tab = ACCOUNT_TABS[key];
            arrTabsListResults.push(<li key={key}
                                        className={tab.id === accountTabActiveId ? 'active' : ''}>
                                        <Link href={tab.url}>
                                            <a href="#"
                                                onClick={handleChooseTab.bind(this, tab.id)}>
                                                {tab.text}
                                            </a>
                                        </Link>
                                    </li>);
        }              
        setTabsListResults(arrTabsListResults);
        setShowAccountMenu(false);
    }
    useEffect(() => {   
        const onMouseUpHideNavAccountMenu = (e) => {
            const nav = document.querySelector('.nav-account');
            if ( !nav.contains(e.target) ) {
                setShowAccountMenu(false);
            }
        }
        document.querySelectorAll('.nav-account ul li a')
                .forEach(e => {
            e.addEventListener('click', handleCloseNavAccount);
        });
        document.addEventListener('mouseup', onMouseUpHideNavAccountMenu);
        
        return () => {
            document.removeEventListener('mouseup', onMouseUpHideNavAccountMenu);
            document.querySelectorAll('.nav-account ul li a')
                    .forEach(e => {
                e.removeEventListener('click', handleCloseNavAccount);
            });
        }
    }, []);
    useEffect(() => {
        const keys = Object.keys(ACCOUNT_TABS);
        for (let i = 0 ; i < keys.length; i++) {
            const key = keys[i];
            const tab = ACCOUNT_TABS[key];
            if ( window.location.pathname.indexOf(tab.url) === 0 ) {
                UpdateAccountTabActiveId(tab.id);
            }
        }
    }, []);
    useEffect(() => {
        initTabsLists(); 
    }, [,accountTabActiveId]);
    return (
        <div className={"nav-account ".concat(showAccountMenu ? 'show' : '')}>
            <a className="font15 cblack" 
                href="#"
                onClick = {handleToggleNavAccount.bind(this)}>
                <strong>Tài khoản <span className="fa fa-angle-down"></span></strong>
            </a>
            <ul>
                {tabsListResults}
            </ul>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        accountTabActiveId : state.globalReducer.accountTabActiveId,
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        UpdateAccountTabActiveId : async (v) => await dispatch({
            type : "UPDATE_ACCOUNT_TAB_ACTIVE_ID",
            payload : v
        }),

    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavAccount);
