import React from 'preact/compat'
import BongDaLayout from '@components/pages/bongda/bongda-layout'
export default function BongDaPage({pageContext}) {
    return (
        <BongDaLayout pageContext = {pageContext} />
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
