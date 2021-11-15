
import BgCommunity from '../../public/community.png';
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'
import Link from 'next/link';
import {getStrapiMedia} from '../../pages/api/images_media';



export default function ProdParallax({title, cta , boxTitle, boxCta,prodImage,link}){
const mediasrc= getStrapiMedia(prodImage);

    
    return(

<div className ="otrocontainer">

<Parallax
bgImage={mediasrc}
strength={300}
style={{
padding:'0px',
}}
bgImageStyle={{opacity: '.9', filter :"blur(0.3rem)"}}

>

<div className="prodParallax_Container">
    <Slide ssrReveal left>
    <div className="prodParallax_title">
    <h1>{title}</h1>
    <h2>{cta}</h2>
    </div>
    </Slide>

<div className ="prodParallax_drawer">
<div className = "prodParallax_drawer_text">
<h1>{boxTitle}</h1>
<p>{boxCta}</p>
<Link href={`/[${link}]`}><Button variant="outlined">Ver mas</Button></Link>

</div>
</div>

</div>
</Parallax>

<style jsx>{`

.prodParallax_Container{
    display:flex;
    flex-direction:row;
    flex-wrap:no-wrap;
    width:175%;
    overflow:hidden;


}

.prodParallax_title{
    min-width:15%;
    color:#ffee10   ;
    margin-left:3rem;
}

.prodParallax_title h1{
    font-size: 3rem;
}

.prodParallax_textcontainer{
    box-sizing:border-box;
    }
    
    
    .prodParallax_drawer{
    box-sizing:border-box;
    position:relative;
    left:0;
    top:-1rem;
    min-height:24rem;
    width:175%;
    background: linear-gradient(to left, #00000099 40%, transparent 30%, transparent 30%);
    transition: left 0.4s;
    margin-bottom:-2rem;
    
    
    }
    
    .prodParallax_drawer:hover{
    left:-42%;
    }
    .prodParallax_drawer_text {
        display:flex;
        flex-direction:column;
        color:white;
        position:relative;
        left:64%;
        z-index:300;
        max-width:38rem;
        }

`}</style>
</div>

    )
}