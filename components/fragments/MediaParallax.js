
import BgCommunity from '../../public/community.png';
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'


export default function MediaParallax(){

    return(

<div className ="otrocontainer">

<Parallax
bgImage={BgCommunity.src}
strength={300}
style={{
padding:'0px',
}}
bgImageStyle={{opacity: '.9', filter :"blur(0.3rem)"}}

>

<div className="socialSlideContainer">
    <Slide ssrReveal left>
    <div className="socialTitle">
    <h1>Social Media</h1>
    <h2>Potencia tus redes sociales</h2>
    </div>
    </Slide>

<div className ="comingup">
<div className = "anothertext">
<h1>¿Queres aumentar tus seguidores y conseguir mas ventas?</h1>
<p>Entonces necesitas conocer muy bien tu público, y lograr interaccion con tus publicaciones. Hace click y conocé todos nuestros planes para potenciar tu empresa!</p>
<Button variant="outlined">Ver mas</Button>

</div>
</div>

</div>
</Parallax>

<style jsx>{`

.socialSlideContainer{
    display:flex;
    flex-direction:row;
    flex-wrap:no-wrap;
    width:175%;


}

.socialTitle{
    min-width:15%;
    color:#ffee10   ;
    margin-left:3rem;
}

.socialTitle h1{
    font-size: 3rem;
}

.social_textcontainer{
    box-sizing:border-box;
    }
    
    
    .comingup{
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
    
    .comingup:hover{
    left:-42%;
    }
    .anothertext {
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
