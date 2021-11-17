import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import isMobile from '../lib/isMobile'
import { fetchStrapi } from './api/hidratation'
import {getStrapiMedia} from "./api/images_media";



const MobileHome = dynamic(()=>import('../components/Home/HomeMobile'));
const DesktopHome = dynamic(()=>import('../components/Home/Home'));


export default function Home({home, bannerImages, prodCards}) {
  const isThisMobile = isMobile()

  return (
   
    <div style={{marginTop:"55px"}}>
    {isThisMobile
    ? <MobileHome home={home} bannerImages={bannerImages[1]} prodCards={prodCards}/> 
    :<DesktopHome home={home} bannerImages={bannerImages[0]} prodCards={prodCards}/>}
    </div>
  )   
}

export async function getServerSideProps(){
  const home = await fetchStrapi("/home");

  const images = home.home_carousel[0].banner_image;

  const bannerImages = images.map(image=> getStrapiMedia(image));
  const prodpages = await fetchStrapi("/prodpages") 
  
  const prodcardItems_second = prodpages.map(element => {
    return element.ProdCardhome
  })


    return{
    props:{
      home, 
      bannerImages, 
      prodCards : prodcardItems_second
       
    },
    
 };
}


