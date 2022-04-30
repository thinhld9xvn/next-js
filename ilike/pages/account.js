import React from 'preact/compat'
import AccountMobile from '@templates/mobile/account-mobile'

export default function AccountPage({pageContext}) {
    return (
        <AccountMobile pageContext = {pageContext} />
    )
}
export async function getServerSideProps({ req, res }) { 
    return {
      props : {
        pageContext : {
        }
      }
    }
}
