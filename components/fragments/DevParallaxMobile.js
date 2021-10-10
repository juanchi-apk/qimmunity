import BgDev from '../../public/dev.png';
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'


export default function DevParallaxMobile(){

    return(
    

            <div className ="otrocontainer">
            
            <Parallax
            bgImage={BgDev.src}
            strength={300}
            style={{
            padding:'0px',
            }}
            bgImageStyle={{ opacity:"0.9",  filter :"blur(0.2rem)"}}
            >
            
            <div className="devSlideContainer">
            <Slide ssrReveal left>

                <div className="devTitle">
                <h1>Desarrollo Web</h1>
                <h2>Optimiza o creá tu sitio y generá más visitas</h2>
                </div>
                </Slide>
            
            
        
            <p className="devCTA">Tenes una página SEO friendly? Sabias que la busqueda en la web es el primer paso antes de la compra?  O que los primeros cinco segundos del tiempo de carga de una página tienen el mayor impacto en las tasas de conversión? Te ayudamos a tener tu sitio optimizado para buscadores </p>
            <span className="devButton"><Button variant="outlined">Ver Mas</Button></span>
           
            
            </div>
            </Parallax>
            
            <style jsx>{`
            
            .devSlideContainer{
                display:flex;
                flex-direction:column;
                flex-wrap:no-wrap;
                width:100%;
                background-color:#1f1f14cc;
            
            
            
            
            }
            
            .devTitle{
                min-width:15%;
                color:#ffee10;
                padding-left: 1rem;
                padding-right:1rem;
            }
            
            .devTitle h1{
                font-size: 2.5rem;
                line-height: 2rem   ;
            
            
            }
            .devTitle h2{
                font-size: 1rem;
                line-height: 1rem ;
            }
            
            .devCTA{
                padding-left: 1rem;
                padding-right:1rem;
                color:white;
            }
            
            .devButton{
            text-align:center;
            margin-bottom:2rem;
            }
            
            `}</style>
            </div>
            
                )
            }