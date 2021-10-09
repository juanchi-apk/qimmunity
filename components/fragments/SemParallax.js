
import BgSEO from '../../public/seosem.png';
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'

export default function SemParallax(){

    return(

<div className ="otrocontainer">

<Parallax
bgImage={BgSEO.src}
strength={300}
style={{
padding:'0px',
}}
bgImageStyle={{filter :"blur(0.5 rem)"}}
>

<div className="seoSlideContainer">
    <Slide ssrReveal left>
    <div className="seoTitle">
    <h1>SEO/SEM</h1>
    <h2>Posicionate en buscadores.</h2>
    </div>

    </Slide>

<div className ="comingup">

<div className = "anothertext">
<h1>Posicionate en buscadores y ayuda a que tus clientes te encuentren!</h1>
<p>Es importante que tu producto llegue en los momentos de busqueda de tu cliente. Nosotros te ayudarmos a generar campañas en buscadores , controlarlas y mejorarlas, para generar la mayor cantidad de trafico!</p>
<Button variant="outlined">Ver Más</Button>
</div>
</div>
</div>

</Parallax>

<style jsx>{`

.seoSlideContainer{
    display:flex;
    flex-direction:row;
    flex-wrap:no-wrap;
    width:175%;


}

.seoTitle{
    min-width:15%;
    color:#ffee10;
    margin-left:3rem;
}

.seoTitle h1{
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
