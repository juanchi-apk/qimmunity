
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

<p className="seoCTA" >Posicionate en buscadores y ayuda a que tus clientes te encuentren! Es importante que tu producto llegue en los momentos de busqueda de tu cliente. Nosotros te ayudarmos a generar campañas en buscadores , controlarlas y mejorarlas, para generar la mayor cantidad de trafico!</p>
<span className="seoButton"><Button variant="outlined">Ver Más</Button></span>
</div>


</Parallax>

<style jsx>{`

.seoSlideContainer{
    display:flex;
    flex-direction:column;
    flex-wrap:no-wrap;
    width:100%;



}

.seoTitle{
    min-width:15%;
    color:#ffee10;
    padding-left: 1rem;
    padding-right:1rem;
}

.seoTitle h1{
    font-size: 2.5rem;
    line-height: 1.5rem   ;
}

.seoTitle h2{
    font-size: 1rem;
    line-height: 1rem ;
}
.seoCTA{
    padding-left: 1rem;
    padding-right:1rem;
    color:white;
}

.seoButton{
text-align:center;
margin-bottom:2rem;
}

`}</style>
</div>

    )
}
