import React from 'preact/compat'
import LichThiDauLayout from '@components/pages/bongda/lich-thi-dau-layout'

export default function LichThiDauPage({pageContext}) {
    return (
        <LichThiDauLayout pageContext = {pageContext} />
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
