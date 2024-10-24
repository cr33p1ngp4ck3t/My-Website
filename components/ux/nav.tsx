/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import '@/app/styles/style.css'
export function Header() {
    return(
        <>
        <header className="header">
            <div style={{ display: "inline-block" }}>
            <h2>MyWebsite</h2>
            </div>
            <div style={{textAlign:"right"}}>
            <button className="button-style"><Link href="/" >Home</Link></button>
            <button className="button-style"><Link href="./about" >About</Link></button>
            <button className="button-style"><Link href="./contact" >Contact</Link></button>
            </div>
      </header>
        </>
    )
}

export function Footer(){
    return(
        <>
        <footer className="footer">
            <div >
                <div ><h2>MyWebsite</h2></div>
            </div>
            <div>
                <div>
                    <div>
                        <Link className="logo" href="https://www.linkedin.com/in/creepingpacket" target="_blank"><img  width="26" height="26" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></Link>
                        <Link className="logo" href="https://www.npmjs.com/~creepingpacket" target="_blank"><img  width="22" height="22" src="https://img.icons8.com/windows/32/npm.png" alt="npm" style={{border:"2px solid #323232", borderRadius:"4px"}}/></Link>
                        <Link className="logo" href="https://github.com/cr33p1ngp4ck3t" target="_blank"><img  width="26" height="26" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></Link>
                    </div>
                </div>
            </div>
      </footer>
        </>
    )
}
