import React from 'react'
import Link from 'next/link'
export default function TagsRecents() {
  return (
    <div className="tags-widget tags-recents">
        <h2 className="title__global">tag được truy cập nhiều</h2>
        <div className="tags-list mtop20 flex">
            <Link href="/manh-quan-ktqdn0.html"><a className="tag">Mạnh Quân</a></Link>
            <Link href="/lam-duc-anh-ktmQ9e.html"><a className="tag">Lâm Đức Anh</a></Link>
            <Link href="/loi-ve-mien-hoa-kt2YW8.html"><a className="tag">Lối Về Miền Hoa</a></Link>
            <Link href="/trong-lan-ktVWRe.html"><a className="tag">Trọng Lân</a></Link>
            <Link href="/lee-min-jung-ktarAZ.html"><a className="tag">Lee Min Jung</a></Link>
            <Link href="/go-so-young-ktR089.html"><a className="tag">Go So Young</a></Link>
            <Link href="/hyun-bin-ktAn5r.html"><a className="tag">Hyun Bin</a></Link>
            <Link href="/death-in-the-nile-ktEeAy.html"><a className="tag">Death in the Nile</a></Link>
        </div>
    </div>
  )
}
