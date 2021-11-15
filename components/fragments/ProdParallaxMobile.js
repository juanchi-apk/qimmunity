
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'
import {getStrapiMedia} from '../../pages/api/images_media';
import Link from 'next/link';


export default function ProdParallaxMobile({title, cta , boxTitle, boxCta,prodImage,link}){
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

<div className="mobile_parallax_container">
    <Slide ssrReveal left>
    <div className="mobile_parallax_title">
    <h1>{title}</h1>
    <h2>{cta}</h2>
    </div>
    </Slide>


<p className="mobile_parallax_CTA">{boxCta}</p>

<span className="mobile_parallax_button"><Link href={`/[${link}]`}><Button variant="outlined">Ver mas</Button></Link></span>

</div>
</Parallax>

<style jsx>{`

.mobile_parallax_container{
    display:flex;
    flex-direction:column;
    flex-wrap:no-wrap;
    width:100%;
    background-color:#1f1f1480;




}

.mobile_parallax_title{
    min-width:15%;
    color:#ffee10;
    padding-left: 1rem;
    padding-right:1rem;
}

.mobile_parallax_title h1{
    font-size: 2.5rem;
    line-height: 2rem   ;


}
.mobile_parallax_title h2{
    font-size: 1rem;
    line-height: 1rem ;
}

.mobile_parallax_CTA{
    padding-left: 1rem;
    padding-right:1rem;
    color:white;
}

.mobile_parallax_button{
text-align:center;
margin-bottom:2rem;
}
`}</style>
</div>

    )
}
