import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import isMobile from '../lib/isMobile'

const DesktopMobile = dynamic(()=>import('../components/Home/HomeMobile'));
const DesktopHome = dynamic(()=>import('../components/Home/Home'));


export default function Home() {
  const isThisMobile = isMobile()

  return (
   
    <div style={{marginTop:"55px"}}>
    {isThisMobile? <DesktopMobile/> :<DesktopHome/>}
    </div>
  )
}


